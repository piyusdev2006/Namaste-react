import ReactDOM from "react-dom/client";
import React from "react";

// REact Element

const element = <span>Hello Doston</span>;


// creating h1 tag using JSX
const heading = (
  <h1 className="head">
    {/* {element} */}
    Namaste React using JSX 🚀
    {/* <FooterComponent/> */}
  </h1>
)


// React Component
const Title = () => (
  <p className="title">
    Namaste React using JSX with title component 🚀
  </p>
)

const name = "Naveen Singh";
const HeadingComponent = () => (
  <div id="container">
    {heading}

    <h2>{name}</h2>
    <Title />
    <h2 className="header">Namaste React Functional Component</h2>
  </div>
);
const FooterComponent = () => (
    <h1 className="footer">Namaste React Functional Component</h1>
);  



const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(<HeadingComponent/>)
