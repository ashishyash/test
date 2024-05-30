import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./partials/header/Header";
import './style.scss';
import Footer from "./partials/footer/Footer";
import Body from "./components/body/body";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <>
      <Header />
      <Body />
      <Footer />
   </>

)