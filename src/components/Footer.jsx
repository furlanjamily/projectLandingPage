import { communityLinks } from "../constants";
import { MessageCircleMore, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (


    <footer class="mt-20 border-t py-10 border-neutral-700">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <ul className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-revers">
              <li>
                <a href="#" class="hover:underline">
                  <MessageCircleMore size={24} />
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  <Instagram size={24} />
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  <Facebook size={24} />
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  <Twitter size={24} />
                </a>
              </li>
            </ul>
          <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">Eventos</a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">Encontros</a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">Colaboradores</a>
            </li>
            <li>
              <a href="#" class="hover:underline">Feed Back</a>
            </li>
          </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" class="hover:underline">VITAL FIT</a>. All Rights Reserved.</span>
      </div>
    </footer>



  )
};

export default Footer;