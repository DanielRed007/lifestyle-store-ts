import { EyeIcon, HeartIcon } from "@heroicons/react/24/outline";
import { LoaderFunction } from "@remix-run/node";
import { json, Link, useLoaderData } from "@remix-run/react";
import Navbar from "~/components/Navbar";

import { IProduct } from "~/interfaces/product";
import Product from "~/models/product.model";
import connectToDatabase from "~/utils/db.server";

export let loader: LoaderFunction = async () => {
  await connectToDatabase();

  const products = await Product.find(); // Obtiene todos los productos desde MongoDB
  return json(products);
};
export default function Index() {
  const data: IProduct[] = useLoaderData<any>();

  return (
    <div className='min-h-screen bg-gray-100'>
      <Navbar />

      <main>
        <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
          <div className='px-4 py-6 sm:px-0'>
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
              {data.map((product: any, index) => (
                <div
                  key={product._id}
                  className='bg-white rounded-lg shadow-lg p-0'
                >
                  <img
                    className='h-36 w-full object-cover rounded-t-lg'
                    src={product.imageUrl}
                    alt={product.name}
                  />
                  <div className='p-5 mt-4'>
                    <h2 className='text-lg font-semibold text-gray-900'>
                      {product.name}
                    </h2>
                    <p className='text-gray-600'>$ {product.price}</p>
                    <div className='mt-2 inline-flex items-center'>
                      <Link
                        to={`/products/${product._id}`}
                        className='bg-blue-500 text-white p-2 rounded-lg mr-2' // Added margin to separate icons
                      >
                        <EyeIcon className='h-5 w-5' aria-hidden='true' />
                      </Link>
                      <Link
                        to={`/favorites/${product._id}`} // Update this route as needed
                        className='bg-red-500 text-white p-2 rounded-lg' // Change color for differentiation
                      >
                        <HeartIcon className='h-5 w-5' aria-hidden='true' />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
