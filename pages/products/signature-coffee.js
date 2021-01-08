import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import DetailsSignature from '../../components/DetailsSignature'

const Signature = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div>
            <DetailsSignature />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Signature;
