import React from "react";
import Find from "./components/find/Find";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Driver from "./components/driver/Driver";
import Luxury from "./components/luxury/Luxury";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Find />
      <Driver />
      <Luxury />
    </div>
  );
}

export default App;
