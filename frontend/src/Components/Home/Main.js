import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";


//Arrow function
const Main = () => {
  return (
    <div>
      {/**Rendering the Header, Footer Component and Outlet*/}
      <Header />
      <Outlet /> 
      {/** oulet is something blank change between header and footer they will be fixed for all pages in our project*/}
      <Footer />
    </div>
  );
};

export default Main;
