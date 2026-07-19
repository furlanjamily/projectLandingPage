import { useEffect, useMemo, useState } from "react";
import logo from "../../assets/logo2.png";
import { navItems } from "../../constants";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import BrandWordmark from "../ui/BrandWordmark";
import Button from "../ui/Button";

const SCROLL_THRESHOLD = 24;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const sectionIds = useMemo(
    () => navItems.map((item) => item.href.replace("#", "")),
    []
  );
  const activeSection = useScrollSpy(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed left-0 right-0 top-0 z-50 hidden w-full py-3 transition-all duration-300 will-change-[backdrop-filter,background-color] lg:block ${
          isScrolled
            ? "glass-main border-b border-white/5"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="container relative mx-auto px-4 text-sm">
          <div className="flex items-center justify-between">
            <div className="flex shrink-0 items-center">
              <img className="mr-2 w-24" src={logo} alt="VITAL FIT" />
              <BrandWordmark className="text-2xl" />
            </div>

            <ul className="ml-14 hidden space-x-12 lg:flex">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      className={`relative inline-block py-1 font-medium transition-colors duration-300 ${
                        isActive
                          ? "text-orange-400 nav-link-active"
                          : "text-neutral-300 hover:text-orange-400"
                      }`}
                    >
                      {item.label}
                      <span
                        className={`absolute -bottom-0.5 left-0 h-0.5 rounded-full bg-gradient-to-r from-orange-400 to-orange-700 transition-all duration-300 ${
                          isActive ? "w-full opacity-100" : "w-0 opacity-0"
                        }`}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="hidden items-center justify-center lg:flex">
              <Button href="#contato" variant="glass" size="sm">
                Entrar em contato
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <nav className="glass-main glass-hover fixed bottom-4 left-2 right-2 z-50 animate-nav-border-glow rounded-full border-orange-500/20 py-2 px-1 will-change-[backdrop-filter] sm:left-4 sm:right-4 sm:px-2 sm:py-3 lg:hidden">
        <ul className="flex items-center justify-between gap-0.5 text-[11px] sm:justify-around sm:gap-1 sm:text-xs">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`block whitespace-nowrap rounded-full px-2 py-1.5 font-medium transition-all duration-300 sm:px-3 ${
                    isActive
                      ? "animate-nav-item-glow bg-gradient-to-r from-orange-500 to-orange-700 text-white"
                      : "text-neutral-400 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
