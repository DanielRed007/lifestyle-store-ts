import React from "react";

export default function PromoBanner() {
  return (
    <section className='bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg'>
      <div className='max-w-7xl mx-auto py-8 px-6 sm:px-8 lg:px-10 flex justify-between items-center'>
        <div className='flex items-center space-x-4'>
          <div className='bg-white text-blue-600 font-bold rounded-full px-4 py-1.5 text-sm shadow-md'>
            50% OFF
          </div>
          <h2 className='text-2xl font-light text-white'>
            Don’t Miss Out! Limited Time Offer on Selected Items!
          </h2>
        </div>

        <div className='hidden sm:flex items-center space-x-2 bg-white text-blue-600 font-semibold px-4 py-2 rounded-md shadow-lg'>
          <svg
            className='w-6 h-6 text-blue-600'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M12 8c-1.657 0-3 .672-3 1.5S10.343 11 12 11s3-.672 3-1.5S13.657 8 12 8z'
            />
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M19 8c-1.657 0-3 .672-3 1.5S17.343 11 19 11s3-.672 3-1.5S20.657 8 19 8z'
            />
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M7 8c-1.657 0-3 .672-3 1.5S5.343 11 7 11s3-.672 3-1.5S8.657 8 7 8z'
            />
          </svg>
          <span>Best Deal of the Season!</span>
        </div>
      </div>
    </section>
  );
}
