import React from "react";

interface Props {
  count: number;
}

export default function Badge({ count }: Props) {
  return (
    <span className='absolute -top-1 -right-1 bg-red-600 text-white text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center'>
      {count}
    </span>
  );
}
