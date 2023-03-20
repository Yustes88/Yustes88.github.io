import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Logo from "../logo/Logo";
import MenuNav from "./MenuNav";
import { bakeryMenuData, navItems } from "../../data/data";
import { Link } from "react-router-dom";


function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

function Menu() {
  return (
    <>
      <Logo />

      <Popover className="relative">
        <div className="flex items-center justify-between p-6 md:justify-center md:space-x-10">
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-brown hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brown">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <Popover className="relative">
              {({ open, close }) => (
                <>
                  <Popover.Button
                    className="text-brown bg-brown-light-3 group inline-flex items-center rounded-md font-medium hover:text-gray-900 focus:outline-none focus:ring-1 focus:ring-brown focus:ring-offset-2 text-base max-w-sm font-medium leading-tight"
                    >
                    <span className="bg-transparent link link-underline link-underline-brown-light-3">
                      {navItems.map((item) => {
                        return item.title === 'Меню' ? 'Меню' : ''
                      })}
                    </span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-brown" : "text-brown",
                        "bg-transparent ml-2 h-5 w-5 group-hover:text-gray-500"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform lg:left-1/2 lg:ml-0 lg:max-w-2xl lg:-translate-x-1/2">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-brown ring-opacity-25">
                        <div className="relative grid gap-6 bg-brown-light-3 px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                          {bakeryMenuData.map((item) => (
                            <button onClick={() => close()}>
                            <Link
                              key={item.title}
                              to={`/menu/${item.id}`}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50 "
                            >
                              {/* <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                                <item.icon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              </div> */}
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900 link link-underline link-underline-brown">
                                  {item.title}
                                </p>
                              </div>
                            </Link>
                            </button>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <MenuNav data={navItems} />
          </Popover.Group>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden z-10 bg-brown-light-3"
          >
            <div className="divide-y-2 divide-brown rounded-lg bg-white shadow-lg ring-1 ring-brown ring-opacity-25">
              <div className="px-5 pt-2 pb-6">
                <div className="flex items-center justify-end">
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-brown hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brown">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid grid-cols-1 gap-7">
                    {navItems.map((item) => (
                      <a
                        key={item.title}
                        href={item.src}
                        className="-m-3 flex items-center rounded-lg p-3 hover:bg-gray-50 justify-center"
                      >
                        {/* <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-indigo-500 text-white">
                          <solution.icon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        </div> */}
                        <div className="ml-4 text-base font-medium text-gray-900 link link-underline link-underline-brown">
                          {item.title}
                        </div>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </>
  );
}

export default Menu;
