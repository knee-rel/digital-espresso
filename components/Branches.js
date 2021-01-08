import React from "react";
import Image from "next/image";

const Branches = () => {
  return (
    <main className="flex flex-wrap justify-center flex-1 lg:container px-4 py-6 mx-auto md:px-6 md:py-12">
      <div className="grid gap-6 grid-cols-1">
        <div>
          <section className="mb-6">
            <h2 className="mb-3 text-xl font-bold">Katipunan Branch</h2>
            <p>Katipunan Cor. Rosa Alvaro, Loyola Heights, QC</p>
            <Image
              src="/branch_1.jpg"
              alt="Picture of coffee"
              width={400}
              height={250}
              className="w-full object-cover object-center rounded border border-gray-200"
            ></Image>
          </section>
          <section className="mb-6">
            <h2 className="mb-3 text-xl font-bold">SM North Edsa Branch</h2>
            <p>SM North Edsa Level 1, Edsa, Quezon City</p>
            <Image
              src="/branch_2.jpg"
              alt="Picture of coffee"
              width={400}
              height={250}
              className="w-full object-cover object-center rounded border border-gray-200"
            ></Image>
          </section>
          <section className="mb-6">
            <h2 className="mb-3 text-xl font-bold">SM Fairview Branch</h2>
            <p>SM Fairview Annex 2, Quirino Hwy., Quezon City</p>
            <Image
              src="/branch_3.jpg"
              alt="Picture of coffee"
              width={400}
              height={250}
              className="w-full object-cover object-center rounded border border-gray-200"
            ></Image>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Branches;
