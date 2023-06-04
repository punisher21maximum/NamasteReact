import React from "react";
import ReactDom from "react-dom";
import Header from "./Components/Header";
import Body from "./Components/Body";


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
