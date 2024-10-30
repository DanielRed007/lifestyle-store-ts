import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import React from "react";
import { IProduct } from "~/interfaces/product";

interface CartItemProps {
  product: IProduct;
  quantity: number;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, newQuantity: number) => void;
}

export default function CartItem({
  product,
  quantity,
  removeFromCart,
  updateQuantity,
}: CartItemProps) {
  return (
    <div className='flex items-start justify-between border-b border-gray-200 pb-4 mb-4'>
      <div className='flex items-start space-x-4'>
        <img
          src={product.imageUrl}
          alt={product.name}
          className='w-20 h-20 object-cover rounded-md'
        />
        <div>
          <h2 className='text-lg font-semibold text-gray-800'>
            {product.name}
          </h2>
          <p className='text-gray-600 w-96 text-sm line-clamp-2'>
            {product.description}
          </p>
          <div className='mt-1 flex items-baseline'>
            <p className='text-gray-900 font-bold text-xl'>
              $
              {product.discountPrice > 0
                ? product.discountPrice
                : product.price}
            </p>
            {product.discountPrice > 0 && (
              <p className='text-gray-400 text-sm line-through ml-2'>
                ${product.price}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className='flex items-center space-x-4'>
        <div className='flex items-center space-x-2'>
          <span className='text-gray-700 font-medium'>Quantity:</span>
          <button
            className='p-1 bg-gray-200 rounded hover:bg-gray-300 text-gray-600'
            onClick={() =>
              updateQuantity(product._id, Math.max(quantity - 1, 1))
            }
          >
            <MinusIcon className='h-5 w-5' aria-hidden='true' />
          </button>
          <p className='mx-2 text-gray-700 font-semibold'>{quantity}</p>
          <button
            className='p-1 bg-gray-200 rounded hover:bg-gray-300 text-gray-600'
            onClick={() => updateQuantity(product._id, quantity + 1)}
          >
            <PlusIcon className='h-5 w-5' aria-hidden='true' />
          </button>
        </div>

        <button
          onClick={() => removeFromCart(product._id)}
          className='px-3 py-1.5 bg-red-500 text-white rounded hover:bg-red-600 font-medium'
        >
          Remove
        </button>
      </div>
    </div>
  );
}
