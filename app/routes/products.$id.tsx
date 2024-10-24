import { useLoaderData } from "react-router-dom";
import connectToDatabase from "~/utils/db.server";
import Product from "~/models/product.model";
import { json, LoaderFunction } from "@remix-run/node";
import { IProduct } from "~/interfaces/product";
import Navbar from "~/components/Navbar";

export let loader: LoaderFunction = async ({ params }) => {
  await connectToDatabase();

  const product: IProduct | null = await Product.findById(params.id); // Obtiene todos los productos desde MongoDB
  console.log({ product });
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
              <div className='max-w-2xl mx-auto p-4'>
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className='w-full h-64 object-cover'
                />
                <h1 className='text-2xl font-bold mt-4'>{product.name}</h1>
                <p className='text-lg text-gray-700'>{product.price}</p>
                <p className='mt-2'>{product.description}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
