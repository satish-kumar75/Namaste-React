import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";




const Applayout = () => {
  return (
    <div>
      <div className="app">
        <Header />
        <Body />
      </div>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout />); // This render take the JS object and convert into an HTML Element
