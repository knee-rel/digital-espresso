import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About from '../components/About'

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div>
            <About />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default AboutPage;
