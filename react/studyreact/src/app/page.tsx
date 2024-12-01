'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const products = [
    {
      name: 'Product 1',
      description: 'Description 1',
      price: 100,
    },
    {
      name: 'Product 2',
      description: 'Description 2',
      price: 200,
    },
    {
      name: 'Product 3',
      description: 'Description 3',
      price: 300,
    },
  ];

  const listItems = products.map((product) => (
    <li
      className={product.price === 300 ? 'text-pink-300 hover:text-blue-300' : 'text-[#243c5a] hover:text-[#3182ce]'}
      key={product.name}
    >
      {product.name} - {product.description} - {product.price}
    </li>
  ));

  const [count1, setCount] = useState(0);
  const handleClick = () => {
    alert('Button clicked ' + `${count1}` + ' times');
    setCount(count1 + 1);
  };

  // Custom component
  // state is maintained independently for each component
  function MyButton() {
    // const [count, setCount] = useState(0);
    const handleClick = () => {
      setCount(count1 + 1);
    };
    return (
      <button
        type='button'
        className='px-4 py-2 text-white bg-blue-500 rounded-md'
        onClick={handleClick}
      >
        Clicked {count1} times
      </button>
    );
  }

  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <ul>{listItems}</ul>
      <button
        type='button'
        className='px-4 py-2 text-white bg-blue-500 rounded-md'
        onClick={handleClick}
      >
        Click me!
      </button>
      <MyButton />
      <MyButton />
    </div>
  );
}
