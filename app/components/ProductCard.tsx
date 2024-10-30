import React from "react";
import { EyeIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "@remix-run/react";
import { IProduct } from "~/interfaces/product";

interface Props {
  product: IProduct;
  isSelected: (product: IProduct) => boolean;
  addToCart: (product: IProduct) => void;
}
ShoppingCartIcon;

export default function ProductCard({ product, isSelected, addToCart }: Props) {
  return (
    <div
      key={product._id}
      className='bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-0'
    >
      <img
        className='h-36 w-full object-cover rounded-t-lg'
        src={product.imageUrl}
        alt={product.name}
      />
      <div className='px-4 py-3'>
        <h2 className='text-lg font-bold text-gray-900 truncate'>
          {product.name}
        </h2>

        <div className='mt-1 flex items-baseline'>
          <p className='text-gray-700 text-2xl font-semibold mr-2'>
            ${product.discountPrice > 0 ? product.discountPrice : product.price}
          </p>
          {product.discountPrice > 0 && (
            <p className='text-gray-400 text-lg line-through'>
              ${product.price}
            </p>
          )}
          {product.discountPercentage > 0 && (
            <p className='text-red-500 text-sm ml-2'>
              -{product.discountPercentage}%
            </p>
          )}
        </div>

        <div className='mt-3 flex items-center space-x-2'>
          <Link
            to={`/products/${product._id}`}
            className='text-blue-500 hover:text-blue-600'
          >
            <EyeIcon className='h-7 w-7' aria-hidden='true' />
          </Link>
          {isSelected(product) ? (
            <ShoppingCartIcon
              className='h-7 w-7 text-green-700 cursor-pointer'
              aria-hidden='true'
            />
          ) : (
            <PlusCircleIcon
              className='h-7 w-7 text-blue-500 cursor-pointer hover:text-blue-600'
              aria-hidden='true'
              onClick={() => addToCart(product)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
