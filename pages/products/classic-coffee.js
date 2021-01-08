import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import DetailsClassic from '../../components/DetailsClassic'

const Classic = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div>
            <DetailsClassic />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Classic;
