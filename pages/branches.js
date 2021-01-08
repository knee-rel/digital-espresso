import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Branches from "../components/Branches";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Branches />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
