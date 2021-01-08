import Image from "next/image";

const About = () => {
  return (
    <section class="bg-white mt-20 mb-20">
      <div class="max-w-2xl px-6 text-center mx-auto">
        <h2 class="text-3xl font-semibold text-gray-800">
          <span class="bg-red-900 text-white rounded px-1">
            Who is Digital Espresso
          </span>
        </h2>
        <p class="text-gray-600 mt-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. A aliquam
          veniam suscipit eaque iure, eligendi harum expedita cupiditate sequi,
          culpa autem! Quaerat ex fugit iste suscipit reiciendis, accusamus
          ipsum quae.
        </p>

        <div class="flex items-end justify-center mt-16">
          <div className='sm:w-1/2 p-4'>
            <Image
              src="/coffee_3.jpg"
              alt="Picture of coffee"
              width={400}
              height={400}
              className="w-full object-cover object-center rounded border border-gray-200"
            ></Image>
          </div>
          <div className='sm:w-1/2 p-4 '>
            <Image
              src="/coffee_2.jpg"
              alt="Picture of coffee"
              width={400}
              height={400}
              className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
            ></Image>
          </div>
          <div className='sm:w-1/2 p-4'>
            <Image
              src="/coffee_one.jpg"
              alt="Picture of coffee"
              width={400}
              height={400}
              className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
