import React from "react";

export default function PromoBanner() {
  return (
    <section className='bg-blue-500 shadow'>
      <div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center'>
        <h2 className='text-lg font-semibold text-white'>
          Don't miss out! 50% off on selected items – Limited time offer!
        </h2>
        {/* <button className='bg-white text-blue-500 font-medium px-4 py-2 rounded-md hover:bg-gray-100 focus:outline-none'>
            Shop Now
          </button> */}
      </div>
    </section>
  );
}
