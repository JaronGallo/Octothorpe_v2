import React from "react";
console.log("running client/src/components/Grid/Col.js");

export const Col = ({ size, children }) =>
  <div className={size.split(" ").map(size => "col-" + size).join(" ")}>
    {children}
  </div>;