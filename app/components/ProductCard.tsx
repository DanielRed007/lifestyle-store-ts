import React from "react";
import { EyeIcon } from "@heroicons/react/24/outline";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "@remix-run/react";
import { IProduct } from "~/interfaces/product";

interface Props {
  product: IProduct;
  isSelected: (product: IProduct) => boolean;
  addToCart: (product: IProduct) => void;
}

export default function ProductCard({ product, isSelected, addToCart }: Props) {
  return (
    <div key={product._id} className='bg-white rounded-lg shadow-lg p-0'>
      <img
        className='h-36 w-full object-cover rounded-t-lg'
        src={product.imageUrl}
        alt={product.name}
      />
      <div className='px-3 pt-2 mt-1'>
        <h2 className='text-lg font-bold text-gray-900'>{product.name}</h2>

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
          {isSelected(product) ? (
            <PlusCircleIcon
              className={`h-7 w-7 text-red-500`}
              aria-hidden='true'
            />
          ) : (
            <PlusCircleIcon
              className={`h-7 w-7 text-blue-500`}
              aria-hidden='true'
              onClick={() => addToCart(product)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
