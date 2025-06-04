
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


console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);  //passing object parent



