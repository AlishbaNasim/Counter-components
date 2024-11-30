"use client"
import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => count > 0 && setCount(count - 1); 

  return (
    <div className="relative flex items-center justify-center h-screen bg-gray-300">
      <div className="relative bg-white shadow-lg rounded-lg p-8 text-center w-80">
        <h1 className="text-4xl text-blue-500 font-bold mb-4 underline">Counter</h1>
        <h1 className="text-4xl font-bold mb-4">{count}</h1>
        <div className="flex justify-between mt-6">
          <button
            onClick={decrement}
            className="absolute left-2 bottom-2 bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600 "
          >
            Decrement -
          </button>
          <button
            onClick={increment}
            className="absolute right-2 bottom-2 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 "
          >
            Increment +
          </button>
        </div>
      </div>
    </div>
  );
}
