import React from "react";
console.log("running client/src/components/Form/TextArea.js");

export const TextArea = props =>
  <div className="form-group">
    <textarea className="form-control" rows="5" {...props} />
  </div>;