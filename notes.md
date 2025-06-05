<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Namaste React</title>
    <link rel="stylesheet" href="index.css">
</head>
<body>
    <div id="root"> </div> 

    <h1>Hello world from HTML</h1>


     <!-- <script>
        const heading = document.createElement("h1");
        heading.innerHTML = "Hello world from Namaste react";

        const root = document.getElementById("root");
        root.appendChild(heading);
    </script>  -->
  
   
    <!-- <script crossorigin 
    src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script> -->
    
    <script type = "module" src="./App.js"></script>
</body>
</html> 

<!-- run the code using command "npx parcel index.html" -->

/*
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

## Buildng react app from scratch
```
- create our own create react app from scratch 
- npm : it is a package manager that are required in our project
- npm init : it initializes a project with some configuration and create a package.json file
- it contain all the dependencies that our project require and it is managed by npm
- now we are going to install the bundler which is parcel which makes our app production ready
- npm install -D parcel : it actually download all the code from online parcel and ingnites our app for developement dependencies
- when we download any package after initializing the npm init a new file is created which is "package-lock.json" and a folder which is "node_modules/ and it contains all the code of any package that we use in our project coming from package.json
- package.json keep track of approx version but package-lock.json keep trak of exact version with hash value like  "sha512"
- many other packages are also installed because packages are dependent on some other dpendencies also that's why so many package .json is available in the node modules known as transitive dependencies
- never put the node modules to github ,instead we put it inside .gitignore and also put .env file that contains some secret keys and connection strings
- we never push .env and -gitignore file on github becuase we can regenerate all the node modules just by running the command "npm installl"
.

- igniting our app , using the command 
"npx parcel index.html"
 -> parcel has created a server for us and it running on localhost:1234 and it makes a developement build

- "npx parcel build index.html" -> it makes a production build

- npm :- it is for downloading the package
- npx :- it is for executing a package
- parcel build a dist folder which is ready for production


- now inject react into our app using npm because using CDN is costly operation everytime it makes an network call

- install react :- npm install react
- install react-dom :- npm install react-dom

- when we run the npx parcel <filename> or npx parcel build <filename> for developement and prod build the dist/ and .parcel-cache is generated

- Anything that can be regenerated can be put in .gitignore file 

- It's time create our react app browser compatible

- add this configuration in your package.json
"browserslist":[
  "last 2 chrome versions"
]
```

## Episode 03 part 01
```
  understanding the fundamaental concept of react

  so first we run the project using the command "npx parcel <filename>"

  what this command means and what it actually does?

  ** this command means we are executing a npm package parcel and  we give a source file which is index.html

  ** instead of writing this command everytime we need to create a script which runs the project via that script
 **  in package.json under script write the script "start": "parcel index.html" which start the project in developement mode

  another script for production mode : "build": "pacel build index.html"
  Now we can easily run the project simply using these commands 
  In dev mode , use: npm run start , shortcut = npm start
  In prod mode, use: npm run build

  const heading = React.createElement(
    "h1",
    { id: "heading" },
    "Namaste React 🚀"
  );

  All the above code is creating a react element which is an object menas heading is an object

  const root = ReactDOM.createRoot(document.getElementById("root"));

  root.render(heading);

  when we do root.render this ReactDOM library takes the object heading and converts into HTML and push onto the browser and replace all the things that is inside the root

  <div id="root">
        <h1>Hello world from HTML</h1>
  </div> 
  Everything inside this div is replaced and the oject content is rendered  on the DOM


  
```
## JSX
- // JSX - is not HTML in javaScript , it has HTML like syntax but it is not HTML
- JSX code is transpiled => React.createElement => ReactElement = JS Object => HTML Element (rendered) before it reaches the js engine => parcel => babel 
- In JSX , we use camelCase to give attribute and we use className similar to class in HTML
- Single line JSX is valid if it is written like this : const jsxHeading = <h1 id="heading">Namaste React using JSX 🚀</h1>;
- for multiline code of JSX it need sto wrap inside a parenthesis() so that babel can understand that it where is JSX starting and where it is ending
- const heading = (
   <h1 className="head">
   Namaste React using JSX 🚀
   </h1>
 );

- // creating h1 tag using JSX
- const jsxHeading = <h1 id="heading">Namaste React using JSX 🚀</h1>;

- the jsx code we have written is not a pure javascript , the browser only understand the ES6 script

-  
