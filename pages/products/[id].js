import React from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Details from "../../components/Details";

const ProdDetails = () => {
  const router = useRouter();
  return (
    <div>
      <Navbar />
      <main>
        {router.query.prod === "Gumamela Coffee" ? (
          <Details name={router.query.prodName} />
        ) : router.query.prod === "Native Coffee" ? (
          <Details name={router.query.prod} />
        ) : router.query.prod === "Signature Coffee" ? (
          <Details name={router.query.prod} />
        ) : router.query.prod === "Classic Coffee" ? (
          <Details name={router.query.prod} />
        ) : null}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default ProdDetails;
