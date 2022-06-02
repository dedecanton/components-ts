import React from "react";
import Footer from "./components/Footer/";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import About from "./sections/About";
import Home from "./sections/Home";
import Location from "./sections/Location";
import Services from "./sections/Services";
import Testimonial from "./sections/Testimonial";

function App() {

  return (
    <div className="">
      <Header />
      <Home />
      <About/>
      <Services />
      <Testimonial/>      
      <Gallery/>
      <Location/>
      <Footer/>
    </div>
  );
}

export default App;
