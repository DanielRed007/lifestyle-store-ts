import {
  ArrowUturnLeftIcon,
  HomeModernIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/solid";
import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div className='min-h-screen bg-gray-100'>
      <header className='bg-white shadow'>
        <div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center'>
          <h1 className='flex items-center text-3xl font-bold text-gray-900'>
            <ShoppingBagIcon className='h-8 w-8 text-gray-700 mr-2' />
            <div>Omega Lifestyle Store</div>
          </h1>
          <div className='flex items-center space-x-4'>
            <Link
              to='/'
              className='p-2 rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none'
            >
              <ArrowUturnLeftIcon className='h-8 w-8 text-gray-700' />
            </Link>
          </div>
        </div>
      </header>

      <main>
        <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
          <div className='px-4 py-6 sm:px-0'>
            <div className='bg-white max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8'>
              <h1 className='text-3xl font-bold text-gray-900'>
                Shopping Cart
              </h1>
              <div className='mt-6'>
                <div className='border-b border-gray-200 pb-4 mb-4'>
                  <h2 className='text-xl font-semibold text-gray-800'>
                    Item Name
                  </h2>
                  <p className='text-gray-600'>Description of the item.</p>
                  <p className='text-gray-900 font-bold'>$XX.XX</p>
                </div>
                <div className='border-b border-gray-200 pb-4 mb-4'>
                  <h2 className='text-xl font-semibold text-gray-800'>
                    Another Item
                  </h2>
                  <p className='text-gray-600'>Description of another item.</p>
                  <p className='text-gray-900 font-bold'>$XX.XX</p>
                </div>
              </div>
              <div className='mt-6'>
                <h2 className='text-lg font-bold text-gray-900'>
                  Total: $XX.XX
                </h2>
                <button className='mt-4 bg-blue-500 text-white font-medium px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none'>
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
