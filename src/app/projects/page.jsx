import React from "react";
import Ecommerce from "./components/Ecommerce";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "./components/Breadcrumb";

export default function page() {
  return (
    <div>
      <Header />
      <h1>Project Overviews:</h1>
      <Breadcrumb />
      <Ecommerce />
      <Footer />
    </div>
  );
}
