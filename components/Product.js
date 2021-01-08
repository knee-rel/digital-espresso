import Link from "next/link";
import Image from "next/image";

const Product = (props) => {
  const productList = [
    {
      link: "gumamela",
      productName: "Gumamela Coffee",
      reviews: "3",
      description:
        "Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo ",
      price: "499.00",
    },
    {
      link: "native",
      productName: "Native Coffee",
      reviews: "10",
      description:
        "Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo ",
      price: "299.00",
    },
    {
      link: "signature",
      productName: "Signature Coffee",
      reviews: "19",
      description:
        "Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo ",
      price: "199.00",
    },
    {
      link: "classic",
      productName: "Classic Coffee",
      reviews: "31",
      description:
        "Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo ",
      price: "99.00",
    },
  ];
  return (
    <div id="container" class="w-4/5 mx-auto">
      <div className="flex flex-col sm:flex-row">
        <div className="sm:w-1/4 p-2">
          <div className="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
            <div className="mb-3">
              {/* <img
                class="w-auto mx-auto rounded-full"
                src="https://tinyurl.com/y4ckfsyk"
                alt=""
              /> */}
              <Image
                src="/coffee_one.jpg"
                alt="Picture of coffee"
                width={150}
                height={150}
                className="w-auto mx-auto rounded-full"
              ></Image>
            </div>
            <h2 className="text-xl font-medium text-gray-700">
              Gumamela Coffee
            </h2>
            <span className="text-blue-500 block mb-5">Reviews: 10</span>
            <Link href="/products/gumamela-coffee">
              <a className="px-4 py-2 bg-blue-500 text-white rounded-full">
                View Product
              </a>
            </Link>
          </div>
        </div>

        <div className="sm:w-1/4 p-2">
          <div className="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
            <div className="mb-3">
              <Image
                src="/coffee_2.jpg"
                alt="Picture of coffee"
                width={150}
                height={150}
                className="w-auto mx-auto rounded-full"
              ></Image>
            </div>
            <h2 class="text-xl font-medium text-gray-700">Native Coffee</h2>
            <span class="text-blue-500 block mb-5">Reviews: 10</span>
            <Link href="/products/native-coffee">
              <a className="px-4 py-2 bg-blue-500 text-white rounded-full">
                View Product
              </a>
            </Link>
          </div>
        </div>

        <div class="sm:w-1/4 p-2">
          <div class="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
            <div class="mb-3">
              <Image
                src="/coffee_3.jpg"
                alt="Picture of coffee"
                width={150}
                height={150}
                className="w-auto mx-auto rounded-full"
              ></Image>
            </div>
            <h2 class="text-xl font-medium text-gray-700">Signature Coffee</h2>
            <span class="text-blue-500 block mb-5">Reviews: 10</span>

            <Link href="/products/signature-coffee">
              <a className="px-4 py-2 bg-blue-500 text-white rounded-full">
                View Product
              </a>
            </Link>
          </div>
        </div>

        <div class="sm:w-1/4 p-2">
          <div class="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
            <div class="mb-3">
              <Image
                src="/coffee_4.jpg"
                alt="Picture of coffee"
                width={150}
                height={150}
                className="w-auto mx-auto rounded-full"
              ></Image>
            </div>
            <h2 class="text-xl font-medium text-gray-700">Classic Coffee</h2>
            <span class="text-blue-500 block mb-5">Reviews: 10</span>
            <Link href="/products/classic-coffee">
              <a className="px-4 py-2 bg-blue-500 text-white rounded-full">
                View Product
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

// {/* <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
//       <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
//         {productList.map((value, key) => {
//           return (
//             <Link
//               href={{
//                 pathname: `/products/${value.link}`,
//                 query: { prod: value.productName },
//               }}
//             >
//               <a>
//                 <Image
//                   src="/coffee_one.jpg"
//                   alt="First Coffee Displayed"
//                   width={500}
//                   height={500}
//                 />
//                 {/* <img class="hover:grow hover:shadow-lg" src="https://images.unsplash.com/photo-1555982105-d25af4182e4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80"> */}
//                 <div className="pt-3 flex items-center justify-between">
//                   <p className="">{value.productName}</p>
//                   <svg
//                     className="h-6 w-6 fill-current text-gray-500 hover:text-black"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
//                   </svg>
//                 </div>
//                 <p className="pt-1 text-gray-900">{value.price}</p>
//               </a>
//             </Link>
//           );
//         })}
//       </div>
//     </div> */}
