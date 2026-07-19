import { socialLinks } from "../../constants";
import BrandWordmark from "../ui/BrandWordmark";

const Footer = () => {
  return (
    <footer id="contato" className="mt-20 scroll-mt-20 pb-10">
      <div className="glass-main glass-hover mx-auto flex w-full max-w-screen-xl flex-col items-center gap-4 rounded-2xl p-6 sm:flex-row sm:items-center sm:justify-between md:p-8">
        <ul className="flex items-center space-x-3">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <li key={label}>
              <a href={href} className="glass-icon-btn" aria-label={label}>
                <Icon size={20} />
              </a>
            </li>
          ))}
        </ul>

        <span className="whitespace-nowrap text-center text-xs text-neutral-500 sm:text-right sm:text-sm">
          © 2024{" "}
          <a
            href="#inicio"
            className="text-neutral-300 transition-colors hover:text-brand-light"
          >
            <BrandWordmark className="text-base" />
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
