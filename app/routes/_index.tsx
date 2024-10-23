import { LoaderFunction } from "@remix-run/node";
import { json, Link, useLoaderData } from "@remix-run/react";
import Navbar from "~/components/Navbar";
import { products } from "~/data/products";
import { Product } from "~/models/product";

export let loader: LoaderFunction = async () => {
  return json(products);
};

export default function Index() {
  const data: Product[] = useLoaderData<any>();

  return (
    <div className='min-h-screen bg-gray-100'>
      <Navbar />

      <main>
        <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
          <div className='px-4 py-6 sm:px-0'>
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
              {data.map((product: any) => (
                <div
                  key={product.id}
                  className='bg-white rounded-lg shadow-lg p-6'
                >
                  <img
                    className='h-48 w-full object-cover rounded-t-lg'
                    src={product.imageUrl}
                    alt={product.name}
                  />
                  <div className='mt-4'>
                    <h2 className='text-lg font-semibold text-gray-900'>
                      {product.name}
                    </h2>
                    <p className='text-gray-600'>{product.price}</p>
                    <Link
                      to={`/products/${product.id}`}
                      className='mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg'
                    >
                      View Product
                    </Link>
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
