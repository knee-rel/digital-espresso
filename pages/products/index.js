import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Product from "../../components/Product";

const Products = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Product />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Products;
