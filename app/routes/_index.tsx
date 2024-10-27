import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { EyeIcon } from "@heroicons/react/24/outline";
import { LoaderFunction } from "@remix-run/node";
import { json, Link, useLoaderData } from "@remix-run/react";
import Navbar from "~/components/Navbar";

import { IProduct } from "~/interfaces/product";
import Product from "~/models/product.model";
import { useShoppingCart } from "~/store/ShoppingCartContext";
import connectToDatabase from "~/utils/db.server";

export let loader: LoaderFunction = async () => {
  await connectToDatabase();

  const products = await Product.find();
  return json(products);
};
export default function Index() {
  const data: IProduct[] = useLoaderData<any>();
  const { addProduct, cart } = useShoppingCart();

  const addToCart = (product: IProduct) => {
    console.log("Display a modal first, then trigger this action");
    addProduct(product);
  };

  const isProductSelected = (product: IProduct) => {
    return cart.items.find((i) => i._id === product._id);
  };

  return (
    <div className='min-h-screen bg-gray-100'>
      <Navbar />

      <main>
        <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
          <div className='px-4 py-6 sm:px-0'>
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
              {data.map((product: IProduct) => (
                <div
                  key={product._id}
                  className='bg-white rounded-lg shadow-lg p-0'
                >
                  <img
                    className='h-36 w-full object-cover rounded-t-lg'
                    src={product.imageUrl}
                    alt={product.name}
                  />
                  <div className='px-3 pt-2 mt-1'>
                    <h2 className='text-lg font-bold text-gray-900'>
                      {product.name}
                    </h2>

                    <div className='mt-1 flex flex-row'>
                      <p className='text-gray-700 text-2xl px-0 mr-1'>
                        $ {product.discountPrice}
                      </p>
                      <p className='text-gray-400 text-lg'>
                        -{product.discountPercentage}%
                      </p>
                    </div>
                    <div className='mt-2 mb-4 inline-flex items-center'>
                      <Link to={`/products/${product._id}`} className='mr-2'>
                        <EyeIcon className='h-7 w-7' aria-hidden='true' />
                      </Link>
                      <PlusCircleIcon
                        className={`h-7 w-7 ${
                          isProductSelected(product)
                            ? "text-red-500"
                            : "text-blue-700"
                        }`}
                        aria-hidden='true'
                        onClick={() => addToCart(product)}
                      />
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
