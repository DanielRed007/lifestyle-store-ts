import React from "react";
import {
  ShoppingCartIcon,
  ChevronDownIcon,
  HomeModernIcon,
} from "@heroicons/react/24/solid";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Link } from "@remix-run/react";
import PromoBanner from "./PromoBanner";
import { useShoppingCart } from "../store/ShoppingCartContext";
import Badge from "./Badge";

export default function Navbar() {
  const { cart } = useShoppingCart();

  const itemCount = cart.items.length;

  return (
    <>
      <header className='bg-white shadow'>
        <div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center'>
          <Link to={"/"}>
            <h1 className='flex items-center text-3xl font-bold'>
              <HomeModernIcon className='h-8 w-8 text-blue-900 mr-2' />
              <div className='text-blue-900 font-light'>
                Omega Lifestyle Store
              </div>
            </h1>
          </Link>
          <div className='flex items-center space-x-4'>
            <Link
              to='/cart'
              className='relative p-2 rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none'
            >
              {itemCount > 0 && <Badge count={itemCount} />}

              <ShoppingCartIcon className='h-8 w-8 text-gray-700' />
            </Link>

            <Menu as='div' className='relative inline-block text-left'>
              <div>
                <MenuButton className='inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none'>
                  Options
                  <ChevronDownIcon
                    className='ml-2 -mr-1 h-5 w-5'
                    aria-hidden='true'
                  />
                </MenuButton>
              </div>

              <MenuItems className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none'>
                <div className='py-1'>
                  <MenuItem>
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
                  </MenuItem>
                  <MenuItem>
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
                  </MenuItem>
                  <MenuItem>
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
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </header>

      <PromoBanner />
    </>
  );
}
