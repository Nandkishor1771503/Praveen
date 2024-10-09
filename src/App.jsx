import { useState } from "react";
import "./App.css";
import Text from "./components/Text";
import Hairstyles from "./components/Hairstyles";
import Services from "./components/Services";
import Footer from "./components/Footer";
import praveen from "./images/praveen.jpeg"
import Customer from "./components/Customer";

// "https://image.lexica.art/full_jpg/19f280a2-2b97-4be2-b782-1fd5c70b84f4"

function App() {
  return (
    <>
    <div className="ml-[1rem]">

      <header className="w-[95%] h-44 my-4  p-2 bg-black text-white rounded-xl flex items-center justify-center shadow-2xl z-50 ">
        <h1>Hi, this is Praveen ....</h1>
        <img
          src={praveen}
          alt=""
          className="w-[35%] rounded-full"
          />
      </header>

      <main>
        <Text />
        <strong className="text-2xl font-sans mt-3  ">Hair styles</strong>
        <Hairstyles/>

        <Services />
        <strong className="text-2xl">Happy Customer</strong>
        <Customer />
      </main>
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
