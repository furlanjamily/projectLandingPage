import logo from "../../assets/logo2.png";
import { navItems } from "../../constants";
import Button from "../ui/Button";

const Navbar = () => {
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
          </div>
        </div>
      </nav>

      <nav className="fixed bottom-4 left-4 right-4 z-50 rounded-full border border-neutral-700/80 bg-neutral-950/40 py-4 backdrop-blur-lg lg:hidden">
        <ul className="flex justify-around items-center text-xs">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="px-1">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
