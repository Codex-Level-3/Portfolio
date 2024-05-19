import React from "react";
import Ecommerce from "./components/Ecommerce";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "./components/Breadcrumb";
import Blog from "./components/Blog";
import Recipe from "./components/Recipe";
import Community from "./components/Community";

export default function page() {
  return (
    <div>
      <Header />
      <h1 className="text-4xl text-white font-bold m-4">Project Overviews:</h1>
      <Breadcrumb />
      <Ecommerce />
      <Blog />
      <Recipe />
      <Community />
      <Footer />
    </div>
  );
}
