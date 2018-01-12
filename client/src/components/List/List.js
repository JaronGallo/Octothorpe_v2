import React from "react";
import "./List.css";
console.log("running client/src/components/List/List.js");
export const List = ({ children }) => {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">
        {children}
      </ul>
    </div>
  );
};