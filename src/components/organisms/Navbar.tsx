import { Disclosure, Transition } from "@headlessui/react";
import { Logo } from "@/atoms/Logo";
import { BsPlusLg } from "react-icons/bs";
import { FaHamburger } from "react-icons/fa";
import { socialMedias } from "@/objetos/social_medias";
import Link from "next/link";
import { Fragment } from "react";
import { ItemsNavegacao } from "@/objetos/items_navegacao";

export const Navbar = () => {
  return (
    <>
      <div className="fixed top-0 right-0 left-0 z-50 w-screen border-zinc-400 bg-zinc-700 opacity-95  delay-300 md:border-b">
        <div className="mx-auto flex h-5 max-w-3xl px-8 md:max-w-4xl items-center justify-center py-2 sm:px-10 lg:px-12">
          {/* Currency selector */}
          <div className="flex w-full items-center justify-between text-sm">
            <div className="flex h-full items-center space-x-6 font-medium text-zinc-100">
              {socialMedias.telefone}
              {socialMedias.telefone2 ? "/" + socialMedias.telefone2 : null}
              {socialMedias.telefone3 ? "/" + socialMedias.telefone3 : null}
            </div>
            <div className="flex items-center  justify-center">
              {socialMedias.medias.map((item) => (
                <div
                  key={item.name}
                  className=" group rounded-full p-2 transition-all hover:scale-105"
                >
                  <Link
                    href={item.link}
                    className="hover:text-primary-dark  text-gray-200"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Disclosure as={Fragment}>
        {({ open }) => (
          <nav className="vidro fixed top-5 left-0 right-0 z-50 bg-stone-200 bg-opacity-90 text-neutral-700 shadow-xl dark:bg-neutral-700 dark:bg-opacity-80 dark:text-gray-100">
            <div className="mx-auto max-w-3xl px-8 md:max-w-4xl md:border-none  lg:px-12 2xl:px-14">
              <div className="flex h-16 items-center justify-between">
                <div className="flex-shrink-0 ">
                  <Logo />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  {ItemsNavegacao?.map((link, index) => (
                    <Disclosure.Button
                      as="a"
                      key={index}
                      href={link.link}
                      className="hover:bg-secondary-yellow-200 flex   w-full items-center justify-center rounded-md py-2  text-lg font-medium text-zinc-900 transition-all  duration-100 hover:text-neutral-700 dark:text-gray-50"
                    >
                      <link.icon className="mr-2 inline" />
                      <p>{link.name}</p>
                    </Disclosure.Button>
                  ))}
                </div>
                <div data-aos="zoom-in" className="-mr-2 flex sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="flex w-full flex-col items-center justify-between gap-2 rounded-full p-2 px-2 lg:rounded-2xl">
                    <span className="sr-only">Open main menu</span>
                    <span className="flex items-center justify-center">
                      {open ? (
                        <BsPlusLg className="inline rotate-45 text-2xl" />
                      ) : (
                        <FaHamburger className="inline text-2xl " />
                      )}
                    </span>
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Transition
              show={open}
              enter="transition ease-in-out duration-300"
              enterFrom="opacity-0 -translate-y-2"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-1"
            >
              <div className="border-b border-zinc-300 px-2 pt-1 dark:border-stone-800 dark:border-opacity-50">
                <Disclosure.Panel className="space-y-4 border-t  border-zinc-400 border-opacity-30 px-2 py-4 dark:border-zinc-800 dark:border-opacity-30 sm:hidden">
                  {ItemsNavegacao?.map((link, index) => (
                    <Disclosure.Button
                      as="a"
                      key={index}
                      href={link.link}
                      className="hover:bg-secondary-yellow-200 flex   w-full items-center justify-center rounded-md py-2  text-lg font-medium text-zinc-900 transition-all  duration-100 hover:text-neutral-700 dark:text-gray-50"
                    >
                      <link.icon className="mr-2 inline" />
                      <p>{link.name}</p>
                    </Disclosure.Button>
                  ))}
                </Disclosure.Panel>
              </div>
            </Transition>
          </nav>
        )}
      </Disclosure>
    </>
  );
};
