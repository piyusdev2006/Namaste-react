/**
 nested HTML structure
 <div id="parent">
    <div id= "child">
        <h1>I'm Heading 1</h1>
        <h2>I'm sibling</h2>
    </div>
 </div>
  
*/

// Now create nested element in React
// ReactElement(object) = HTML(that browser understand)

import ReactDOM from "react-dom/client";
import React from "react";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1", key: "child1" }, [
    React.createElement("h1", { key: "h1-1" }, "This is namaste react"),
    React.createElement("h2", { key: "h2-1" }, "I'm a second sibling"),
  ]),
  React.createElement("div", { id: "child2", key: "child2" }, [
    React.createElement("h1", { key: "h1-2" }, "I'm a heading"),
    React.createElement("h2", { key: "h2-2" }, "I'm a sibling"),
  ]),
]);

// the above code looks very tidious and very ugly and it's more complex than HTML structure
// Using core react this is how we write the HTML structure

// that's why JSX come into picture --> react can be written in more efficient way using JSX

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);  //passing object parent


// const heading = React.createElement(
//     "h1",
//     {
//         id: "heading",
//         xyz: "color"
//     },
//     "Hello world from react "
// );

// console.log(heading);

//   const root = ReactDOM.createRoot(document.getElementById("root"));
//   root.render(root);
