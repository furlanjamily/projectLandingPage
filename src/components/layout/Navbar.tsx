import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo2.png";
import { navItems } from "../../constants";
import Button from "../ui/Button";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen((isOpen) => !isOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full border-b border-neutral-700/80 bg-neutral-950/40 py-3 backdrop-blur-lg">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="w-24 mr-2" src={logo} alt="VITAL FIT" />
            <span className="text-xl">VITAL FIT</span>
          </div>

          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <Button href="#contato" variant="gradient" className="py-2 px-3 rounded-full">
              Entrar em contato
            </Button>
          </div>

          <div className="lg:hidden flex w-full justify-end">
            <button
              className="ml-auto"
              onClick={toggleMobileMenu}
              aria-label="Abrir menu de navegação"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="flex-wrap fixed right-0 z-20 bg-neutral-900 w-full p-12 justify-center items-center lg:hidden">
            <ul className="p-2">
              {navItems.map((item) => (
                <li
                  key={item.href}
                  className="flex justify-center items-center px-4"
                >
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>

            <div className="flex space-x-6 justify-center items-center w-full">
              <Button
                href="#contato"
                variant="gradient"
                className="flex-wrap py-2 px-3 rounded-md"
              >
                Entrar em contato
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
