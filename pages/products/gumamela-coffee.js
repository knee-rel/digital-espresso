import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import DetailsGumamela from '../../components/DetailsGumamela'

const Gumamela = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div>
            <DetailsGumamela />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Gumamela;
