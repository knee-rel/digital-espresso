import React from "react";
import Image from "next/image";

const Testimonies = () => {
  return (
    <div>
      <section className="my-10 text-gray-200 bg-gray-900">
        <div className="max-w-6xl mx-auto px-5 py-24 ">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className=" title-font mb-2 text-4xl font-extrabold leading-10 tracking-tight text-center sm:text-5xl sm:leading-none md:text-6xl">
              What Our Customers Have to Say About Us
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="items-center border border-gray-300 p-6 rounded-lg">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <Image
                    src="/avatar_1.jpg"
                    alt="Picture of coffee"
                    width={400}
                    height={400}
                    className="w-full object-cover object-center rounded border border-gray-200"
                  ></Image>
                </div>
                <h2 className="text-lg  font-medium title-font mb-2">
                  Best Coffee Ever
                </h2>
                <p className="leading-relaxed text-base">
                  I have never tasted coffee as good as what this company makes!
                </p>
              </div>
            </div>

            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="items-center border border-gray-300 p-6 rounded-lg">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <Image
                    src="/avatar_2.jpg"
                    alt="Picture of coffee"
                    width={400}
                    height={400}
                    className="w-full object-cover object-center rounded border border-gray-200"
                  ></Image>
                </div>
                <h2 className="text-lg  font-medium title-font mb-2">
                  A Must Try!
                </h2>
                <p className="leading-relaxed text-base">
                  The coffee that this company makes is astonishing!
                </p>
              </div>
            </div>

            <div className=" xl:w-1/3 md:w-1/2 p-4">
              <div className="items-center border border-gray-300 p-6 rounded-lg">
                <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <Image
                    src="/avatar_3.jpg"
                    alt="Picture of coffee"
                    width={400}
                    height={400}
                    className="w-full object-cover object-center rounded border border-gray-200"
                  ></Image>
                </div>
                <h2 className="text-lg  font-medium title-font mb-2">
                  You Will Live for It
                </h2>
                <p className="leading-relaxed text-base">
                  I cannot start every morning without drinking this coffee!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonies;
