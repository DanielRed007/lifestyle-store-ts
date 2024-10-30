import { useLoaderData } from "react-router-dom";
import connectToDatabase from "~/utils/db.server";
import Product from "~/models/product.model";
import { json, LoaderFunction } from "@remix-run/node";
import { IProduct } from "~/interfaces/product";
import Navbar from "~/components/Navbar";

export let loader: LoaderFunction = async ({ params }) => {
  await connectToDatabase();

  const product: IProduct | null = await Product.findById(params.id);
  return json(product);
};

export default function ProductDetail() {
  const product: any = useLoaderData();

  return (
    <div className='min-h-screen bg-gray-100'>
      <Navbar />

      <main>
        <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
          <div className='px-4 py-6 sm:px-0'>
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
              <div className='max-w-2xl mx-auto p-4 bg-white rounded-lg shadow-md'>
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className='w-full h-64 object-cover rounded-md'
                />
                <h1 className='text-2xl font-bold mt-4'>{product.name}</h1>
                <p className='text-lg font-semibold text-gray-800 mt-2'>
                  $
                  {product.discountPrice > 0
                    ? product.discountPrice
                    : product.price}
                </p>
                {product.discountPrice > 0 && (
                  <p className='text-sm text-red-500 line-through'>
                    ${product.price} ({product.discountPercentage}% off)
                  </p>
                )}
                <p className='text-sm text-gray-600 mt-2'>
                  Taxes: ${product.taxes}
                </p>
                <p className='text-gray-700 text-xs leading-tight mt-4 overflow-hidden overflow-ellipsis line-clamp-3'>
                  {product.description}
                </p>
                <p className='text-sm font-medium text-gray-600 mt-2'>
                  Quantity: {product.quantity}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
