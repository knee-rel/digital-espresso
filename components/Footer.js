import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="footer">
      <section className="bg-gray-800 py-8 w-full">
        <div className="container mx-auto px-8">
          <div className="table w-full">
            <div className="block sm:table-cell">
              <p className="uppercase text-white text-base sm:mb-6 sm:w-1/4">
                Company
              </p>
              <ul className="list-reset text-sm mb-6">
                <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                  <a href="#" className="text-white hover:text-grey-dark">
                    Products
                  </a>
                </li>
                <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
                  <a href="#" className="text-white hover:text-grey-dark">
                    Contact
                  </a>
                </li>
                <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
                  <a href="#" className="text-white hover:text-grey-dark">
                    About Us
                  </a>
                </li>
                <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
                  <a href="#" className="text-white hover:text-grey-dark">
                    Branches
                  </a>
                </li>
              </ul>
            </div>
            <div className="block sm:table-cell">
              <p className="uppercase text-white text-base sm:mb-6 sm:w-1/4">
                Support
              </p>
              <ul className="list-reset text-sm mb-6">
                <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                  <a href="/" className="text-white hover:text-grey-dark">
                    Help
                  </a>
                </li>

                <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                  <a href="#" className="text-white hover:text-grey-dark">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
            <div className="block sm:table-cell">
              <p className="uppercase text-white text-base sm:mb-6 sm:w-1/4">
               Policies
              </p>
              <ul className="list-reset text-sm mb-6">
                <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                  <a href="#" class="text-white hover:text-grey-dark">
                    Terms
                  </a>
                </li>
                <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                  <a href="#" class="text-white hover:text-grey-dark">
                    Privacy
                  </a>
                </li>
                <li className="mt-2 inline-block mr-2 sm:block sm:mr-0">
                  <a href="#" class="text-white hover:text-grey-dark">
                    Returns and Refunds
                  </a>
                </li>
              </ul>
            </div>

            <div className="block sm:table-cell sm:w-1/2 justify-center mt-6">
              <div className="my-2 uppercase text-white text-base sm:mb-6 sm:w-1/4">
                NewsLetter
              </div>
              <ul className="list-reset text-sm mb-6">
                <li className="inline-block mr-2 sm:block sm:mr-0">
                  <span className = 'text-white text-sm'>Want to stay updated?</span>
                </li>
              </ul>
              <div className="bg-white rounded-lg">
                <div className="flex flex-wrap justify-between md:flex-row">
                  <input
                    type="email"
                    className="m-1 p-2 appearance-none text-gray-700 text-sm focus:outline-none"
                    placeholder="Enter your email"
                  />
                  <button className="w-full m-1 p-2 text-sm bg-gray-800 rounded-lg font-semibold uppercase lg:w-auto">
                    subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
          <hr className="h-px mt-6 bg-gray-700 border-none" />
          <div className="flex flex-col items-center justify-between mt-6 md:flex-row">
            <div>
              <a href="/" className="text-xl font-bold text-white">
                Digital Espresso
              </a>
            </div>
            <div className="flex mt-4 md:m-0">
              <div className="text-white -mx-4">All rights reserved.</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
