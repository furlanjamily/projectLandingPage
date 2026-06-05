import { useEffect, useState } from "react";

export function useScrollSpy(sectionIds: string[], topOffset = 120): string {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? "");

  useEffect(() => {
    const getHashSectionId = () => {
      const hashId = window.location.hash.replace("#", "");
      return sectionIds.includes(hashId) ? hashId : "";
    };

    const updateActiveSection = () => {
      const activationLine = Math.max(topOffset, window.innerHeight * 0.65);
      let current = sectionIds[0] ?? "";

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) {
          continue;
        }

        const { top } = el.getBoundingClientRect();
        if (top <= activationLine) {
          current = id;
        }
      }

      setActiveId(current);
    };

    const handleHashChange = () => {
      const hashId = getHashSectionId();
      if (hashId) {
        setActiveId(hashId);
      }

      window.setTimeout(updateActiveSection, 350);
      window.setTimeout(updateActiveSection, 700);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
      window.removeEventListener("hashchange", handleHashChange);
    };
    // sectionIds is expected to be a stable reference (memoized by the caller)
  }, [sectionIds, topOffset]);

  return activeId;
}
