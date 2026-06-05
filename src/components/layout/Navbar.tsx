import { useMemo } from "react";
import logo from "../../assets/logo2.png";
import { navItems } from "../../constants";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import Button from "../ui/Button";

const Navbar = () => {
  const sectionIds = useMemo(
    () => navItems.map((item) => item.href.replace("#", "")),
    []
  );
  const activeSection = useScrollSpy(sectionIds);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 w-full border-b border-neutral-700/80 bg-neutral-950/40 py-3 backdrop-blur-lg">
        <div className="container px-4 mx-auto relative text-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
              <img className="w-24 mr-2" src={logo} alt="VITAL FIT" />
              <span className="text-xl">VITAL FIT</span>
            </div>

            <ul className="hidden lg:flex ml-14 space-x-12">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      className={`relative inline-block py-1 transition-colors duration-300 ${
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

            <div className="hidden lg:flex justify-center space-x-12 items-center">
              <Button href="#contato" variant="gradient" className="py-2 px-3 rounded-full">
                Entrar em contato
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <nav className="fixed bottom-4 left-2 right-2 z-50 rounded-full border border-orange-500/30 bg-neutral-950/50 py-2 px-1 backdrop-blur-lg animate-nav-border-glow sm:left-4 sm:right-4 sm:py-3 sm:px-2 lg:hidden">
        <ul className="flex justify-between items-center gap-0.5 text-[11px] sm:justify-around sm:gap-1 sm:text-xs">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`block whitespace-nowrap rounded-full px-2 py-1.5 transition-all duration-300 sm:px-3 ${
                    isActive
                      ? "bg-gradient-to-r from-orange-500 to-orange-700 text-white animate-nav-item-glow"
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
