import React from "react";
console.log("running client/src/components/Grid/Container.js");

export const Container = ({ fluid, children }) =>
  <div className={`container${fluid ? "-fluid" : ""}`}>
    {children}
  </div>;