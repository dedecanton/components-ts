import React from "react";
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
      {/* Galeria */}
      <Location/>
      {/* Footer */}
    </div>
  );
}

export default App;
