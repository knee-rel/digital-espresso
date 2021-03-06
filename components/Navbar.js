import React from "react";
import Link from "next/link";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-yellow-900 mb-3">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link href="/">
            <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white">
              Digital Espresso
            </a>
          </Link>
          <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item">
              <Link href="/">
                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                  <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Home</span>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/products">
                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Products</span>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about">
                <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">About Us</span>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/branches">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Branches</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
