import React from "react";
console.log("running client/src/components/Jumbotron/Jumbotron.js");
const Jumbotron = ({ children }) =>
  <div style={{ height: 300, clear: 'both' }} className="jumbotron">
    {children}
  </div>;
export default Jumbotron;