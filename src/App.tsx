import React from "react";
import "./App.css";

function App() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <div className={`w-full max-w-md p-4`}>
        <div 
          className={`flex justify-between items-center text-white p-2 bg-no-repeat bg-cover bg-center`}
          style={{
            backgroundImage: `url("assets/images/background.jpeg")`,
          }}
        >
          <div>
            <h1 className={`text-3xl font-grotesque-bold`}>Ready to won a car?</h1>
            <p className={`text-sm font-grotesque-regular`}>Your Ride, Your Savings</p>
          </div>
          <div>
            <img src="assets/images/Sports Car White.svg" className={`w-36`} alt="Sports Car Logo" />
          </div>
        </div>
        <div className={`flex gap-4 p-2 justify-center`}>
          <div className={`p-4 rounded-lg shadow-md font-grotesque-bold items-center flex flex-col`}>
            <img src="assets/images/Sports Car Purple.svg" className={`w-24`} alt="Sports Car Logo" />
            <h3 className={`text-lg`}>Sports Car Purple</h3>
            <h2>$32,000</h2>
            <button className={`bg-lime-green mt-3 rounded text-black font-medium w-full`}>Get Started</button>
          </div>
          <div className={`p-4 rounded-lg shadow-md font-grotesque-bold items-center flex flex-col`}>
            <img src="assets/images/Sports Car Sky.svg" className={`w-24`} alt="Sports Car Logo" />
            <h3 className={`text-lg`}>Sports Car Blue</h3>
            <h2>$32,000</h2>
            <button className={`bg-lime-green mt-3 rounded text-black font-medium w-full`}>Get Started</button>
          </div>
        </div>
        <div className={`flex justify-between px-2 py-5 bg-deep-teal`}>
          <p className={`text-lime-green text-sm font-grotesque-regular`}>Keith Erickson R. Operio</p>
          <img src="assets/images/sesimi-logo.svg" className={`w-20`} alt="sesimi logo" />
        </div>
      </div>

    </div>
  );
  // return (
  //   <div className="w-screen h-screen flex flex-col justify-center items-center gap-y-8">
  //     <img src="assets/images/exam/colors.png" alt="Sesimi colors" />
  //     <div className={`flex gap-x-8`}>
  //       <img
  //         src="assets/images/exam/1080x1080.png"
  //         alt="Social Post"
  //         className={`h-88 h-96`}
  //       />
  //       <img
  //         src="assets/images/exam/1080x1920.png"
  //         alt="Social Story"
  //         className={`h-88 h-96`}
  //       />
  //     </div>
  //   </div>
  // );
}

export default App;
