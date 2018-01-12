import React from "react";
console.log("running client/src/components/Form/FormBtn.js");

export const FormBtn = props =>
  <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
    {props.children}
  </button>;