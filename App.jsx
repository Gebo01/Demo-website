import { useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Service from "./components/Service.jsx";
import "./App.css";
import SecondHero from "./components/SecondHero.jsx";
import Price from "./components/Price.jsx";
function App() {
  return (
    <>
      <div>
        <Header />
        <Hero />
        <Service />
        <SecondHero />
        {/* <Price /> */}
      </div>
    </>
  );
}

export default App;
