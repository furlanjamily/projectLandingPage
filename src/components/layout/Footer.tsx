import { footerLinks, socialLinks } from "../../constants";

const Footer = () => {
  return (
    <footer
      id="contato"
      className="mt-20 scroll-mt-20 border-t py-10 border-neutral-700"
    >
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <ul className="flex items-center mb-4 sm:mb-0 space-x-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <li key={label}>
                <a href={href} className="hover:underline" aria-label={label}>
                  <Icon size={24} />
                </a>
              </li>
            ))}
          </ul>

          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-400 sm:mb-0">
            {footerLinks.map((link, index) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`hover:underline ${
                    index < footerLinks.length - 1 ? "me-4 md:me-6" : ""
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />

        <span className="block text-sm text-gray-400 sm:text-center">
          © 2024{" "}
          <a href="#inicio" className="hover:underline">
            VITAL FIT
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
