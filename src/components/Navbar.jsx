import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo2 from "../assets/logo2.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 w-full">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="w-24 mr-2" src={logo2} alt="logo" />
            <span className="text-xl tracking-tighter">VITAL FIT</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
            >
              Entrar em contato
            </a>
          </div>
          <div className="lg:hidden flex w-full justify-end">
            <button className="ml-auto" onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="flex-wrap fixed right-0 z-20 bg-neutral-900 w-full p-12  justify-center items-center lg:hidden">
            <ul className="p-2">
              {navItems.map((item, index) => (
                <li key={index} className="flex justify-center items-center px-4">
                  <a href={item.href}>{item.label}</a>
                </li>

              ))}
            </ul>

            <div className="flex space-x-6 justify-center items-center w-full">
              <a
                href="#"
                className=" flex-wrap py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800">
                Entrar em contato
              </a>
            </div>

          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
