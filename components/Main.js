import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Main() {
  return (
    <div className="container mx-auto px-6 my-10">
      <div className="h-64 rounded-md overflow-hidden bg-cover bg-center">
        <div className="bg-gray-900 bg-opacity-50 flex items-center h-full w-full" style={{backgroundImage: `url(./coffee_one.jpg)`}}>
          <div className="px-10 max-w-xl">
            <h2 className="text-2xl text-white font-semibold">Coffee</h2>
            <p className="mt-2 text-gray-200">
              See all coffee specially crafted for caffeine lovers!
            </p>
            <Link href="/products">
              <button className="flex items-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                <span>View</span>
                <svg
                  className="h-5 w-5 mx-2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="md:flex mt-8 md:-mx-4">
        {/* insert image at the div below */}
        {/* <div class="w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2" style="background-image: url('https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80')"> */}
        <div className="w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2">
          <div className="bg-gray-900 bg-opacity-50 flex items-center h-full " style={{backgroundImage: `url(./coffee_3.jpg)`}}>
            <div className="px-10 max-w-xl">
              <h2 className="text-2xl text-white font-semibold">
                Favorite Products
              </h2>
              <p className="mt-2 text-gray-200">
                See our best-selling products!
              </p>
              <Link href="/products">
                <button className="flex items-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                  <span>View</span>
                  <svg
                    className="h-5 w-5 mx-2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2">
          <div className="bg-gray-900 bg-opacity-50 flex items-center h-full " style={{backgroundImage: `url(./coffee_4.jpg)`}}>
            <div class="px-10 max-w-xl">
              <h2 class="text-2xl text-white font-semibold">Sale</h2>
              <p class="mt-2 text-gray-200">See our discounted products!</p>
              <Link href="/products">
                <button className="flex items-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                  <span>View</span>
                  <svg
                    className="h-5 w-5 mx-2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
