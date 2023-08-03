import { React, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import reviews from "./data";
import Testimonial from "./Testimonial";

function App() {
  const [count, setCount] = useState(0);

  return (
    
 

   
      <div className="flex flex-col justify-center items-center w-[100vw] h-[100vh]  bg-gray-200 ">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Our Testimonial</h1>
          <div className="bg-violet-400 h-[4px] w-1/5 mt-1 mx-auto -z-10"></div>
          <Testimonial reviews={reviews} />
        </div>
      </div>
      
    
  );
}

export default App;
