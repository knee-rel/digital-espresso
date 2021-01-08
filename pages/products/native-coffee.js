import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import DetailsNative from '../../components/DetailsNative'

const Native = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div>
            <DetailsNative />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Native;
