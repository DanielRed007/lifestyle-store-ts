import { Link } from "@remix-run/react";
import Navbar from "~/components/Navbar";

export default function Index() {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: "$100",
      imageUrl: "/images/product1.jpg",
    },
    {
      id: 2,
      name: "Product 2",
      price: "$150",
      imageUrl: "/images/product2.jpg",
    },
    {
      id: 3,
      name: "Product 3",
      price: "$200",
      imageUrl: "/images/product3.jpg",
    },
    {
      id: 4,
      name: "Product 4",
      price: "$250",
      imageUrl: "/images/product4.jpg",
    },
    {
      id: 1,
      name: "Product 1",
      price: "$100",
      imageUrl: "/images/product1.jpg",
    },
    {
      id: 2,
      name: "Product 2",
      price: "$150",
      imageUrl: "/images/product2.jpg",
    },
    {
      id: 3,
      name: "Product 3",
      price: "$200",
      imageUrl: "/images/product3.jpg",
    },
    {
      id: 4,
      name: "Product 4",
      price: "$250",
      imageUrl: "/images/product4.jpg",
    },
    {
      id: 1,
      name: "Product 1",
      price: "$100",
      imageUrl: "/images/product1.jpg",
    },
    {
      id: 2,
      name: "Product 2",
      price: "$150",
      imageUrl: "/images/product2.jpg",
    },
    {
      id: 3,
      name: "Product 3",
      price: "$200",
      imageUrl: "/images/product3.jpg",
    },
    {
      id: 4,
      name: "Product 4",
      price: "$250",
      imageUrl: "/images/product4.jpg",
    },
  ];

  return (
    <div className='min-h-screen bg-gray-100'>
      <Navbar />

      <main>
        <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
          <div className='px-4 py-6 sm:px-0'>
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
              {products.map((product) => (
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
