/* eslint-disable no-unused-vars */
import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./TestStyle.css";
const clickHandler = () => {
  alert("Click");
};
const Test = () => {
  return (
    <>
      <Header />
      <Sidebar />
    </>
  );
};

export default Test;
