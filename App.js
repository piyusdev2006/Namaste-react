import ReactDOM from "react-dom/client";
import React from "react";

// React Element = React.createElement => Object => when rendered onto the DOM becomes a Html element

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React 🚀"
);
console.log(heading);

// creating h1 tag using JSX
const jsxHeading = <h1 className="head">Namaste React using JSX 🚀</h1>;
console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
