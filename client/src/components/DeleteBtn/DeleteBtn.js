import React from "react";
import "./DeleteBtn.css";
console.log("running client/src/components/DeleteBtn/DeleteBtn.js");

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const DeleteBtn = props => (
  <span className="delete-btn" {...props}>
    ✗
  </span>
);
export default DeleteBtn;