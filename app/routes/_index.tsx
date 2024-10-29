import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { EyeIcon } from "@heroicons/react/24/outline";
import { LoaderFunction } from "@remix-run/node";
import { json, Link, useLoaderData } from "@remix-run/react";
import Navbar from "~/components/Navbar";

import { IProduct } from "~/interfaces/product";
import Product from "~/models/product.model";
import { useShoppingCart } from "~/store/ShoppingCartContext";
import connectToDatabase from "~/utils/db.server";
import ProductCard from "~/components/ProductCard";

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

  const isProductSelected = (product: IProduct): boolean => {
    return cart.items.some((i) => i._id === product._id);
  };

  return (
    <div className='min-h-screen bg-gray-100'>
      <Navbar />

      <main>
        <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
          <div className='px-4 py-6 sm:px-0'>
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
              {data.map((product: IProduct, index: number) => (
                <ProductCard
                  key={index}
                  product={product}
                  isSelected={isProductSelected}
                  addToCart={addToCart}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
