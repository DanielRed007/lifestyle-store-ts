import React from "react";
import {
  ShoppingCartIcon,
  ChevronDownIcon,
  HomeModernIcon,
} from "@heroicons/react/24/solid";
import { Menu } from "@headlessui/react";
import { Link } from "@remix-run/react";
import PromoBanner from "./PromoBanner";

export default function Navbar() {
  return (
    <>
      <header className='bg-white shadow'>
        <div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center'>
          <h1 className='flex items-center text-3xl font-bold text-gray-900'>
            <HomeModernIcon className='h-8 w-8 text-gray-700 mr-2' />
            <div>Omega Lifestyle Store</div>
          </h1>
          <div className='flex items-center space-x-4'>
            <Link
              to='/cart'
              className='p-2 rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none'
            >
              <ShoppingCartIcon className='h-8 w-8 text-gray-700' />
            </Link>

            <Menu as='div' className='relative inline-block text-left'>
              <div>
                <Menu.Button className='inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none'>
                  Options
                  <ChevronDownIcon
                    className='ml-2 -mr-1 h-5 w-5'
                    aria-hidden='true'
                  />
                </Menu.Button>
              </div>

              <Menu.Items className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none'>
                <div className='py-1'>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={`${
                          active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                        } block px-4 py-2 text-sm`}
                      >
                        Account Settings
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={`${
                          active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                        } block px-4 py-2 text-sm`}
                      >
                        Support
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={`${
                          active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                        } block px-4 py-2 text-sm`}
                      >
                        Sign Out
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Menu>
          </div>
        </div>
      </header>

      <PromoBanner />
    </>
  );
}
