import { Disclosure, Transition } from "@headlessui/react";
import {Logo} from '../atoms'
export const Navbar = () => {

  return (
    <div
      className="w-full  fixed top-0  z-50 transition-transform duration-500"
    >
      <Disclosure
        as="nav"
        className="fixed bottom-0 md:bottom-auto md:top-6 right-0 left-0 z-50"
      >
        {({ open, close }) => {
          return (
            <>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="md:hidden  rounded-t-3xl border border-zinc-400 shadow-xl bg-zinc-50 ">
                  <div className="space-y-1 px-8 sm:px-10 pt-2 pb-3">
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                    <div
                      onClick={() => close()}
                      className=" w-full  py-5 space-y-5 text-xl"
                    >

                    </div>
                  </div>
                </Disclosure.Panel>
              </Transition>

              <div className="w-full vidro bg-gray-100 md:bg-opacity-95 shadow-xl flex justify-between md:justify-center items-center ">
                <div className="flex px-2 sm:mx-auto  sm:px-6 lg:px-8  w-full border-t md:border-none border-zinc-400  md:max-w-7xl h-[5rem] md:h-[4.4rem] items-center justify-between py-2 ">
                  {/* items Navbar */}

                  <div className="py-5 hidden  h-12 md:flex justify-center items-center rounded-full">
                    <Logo />
                  </div>

                  <div className="hidden lg:ml-6 gap-4 lg:flex justify-between text-neutral-700">

                  </div>

                  <div className="grid grid-cols-3 md:flex w-full md:w-auto md:justify-around divide-x md:divide-none  md:items-center">
                    <div className=" flex lg:hidden md:ml-6 col-span-1">
                      <Disclosure.Button className="rounded-full lg:rounded-2xl w-full p-2 px-2 flex justify-between items-center flex-col gap-2">
                        <span className="sr-only">Open main menu</span>
                        <span className="flex justify-center items-center">
                          {open ? (
                            <>x</>
                          ) : (
                            <>
                              toggle
                            </>
                          )}
                        </span>
                        <span className="inline md:hidden font-medium text-sm">
                          Navegação
                        </span>
                      </Disclosure.Button>
                    </div>
                   
                    {/* Mobile menu button */}
                  </div>
                </div>
              </div>

              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="hidden md:block lg:hidden  rounded-b-[2rem] bg-zinc-100 border border-zinc-300 ">
                  <div className="space-y-1 px-8 sm:px-10 pt-2 pb-3">
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                    <div
                      onClick={() => close()}
                      className=" w-full  py-5 space-y-6 text-3xl "
                    >
                      items
                    </div>
                  </div>
                </Disclosure.Panel>
              </Transition>
            </>
          );
        }}
      </Disclosure>
    </div>
  );
};