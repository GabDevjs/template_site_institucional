import { ItemsNavegacao } from "@/objetos/items_navegacao";
import { socialMedias } from "@/objetos/social_medias";

export const Footer = () => {
  return (
    <footer className="bg-zinc-200">
      <div className="mx-auto max-w-7xl overflow-hidden py-20 px-6 sm:py-24 lg:px-8">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {ItemsNavegacao.map((item) => (
            <div key={item.name} className="pb-6">
              <a
                href={item.link}
                className="text-sm leading-6 text-gray-600 hover:text-gray-900"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          {socialMedias.medias.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; 2020 Your Company, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
