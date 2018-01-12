import React from "react";
console.log("running client/src/components/List/ListItems.js");
export const ListItem = props =>
  <li className="list-group-item">
    {props.children}
  </li>;