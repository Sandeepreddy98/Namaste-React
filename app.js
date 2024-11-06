import React from "react";
import ReactDOM from "react-dom/client";


// Render using core React
const heading = React.createElement("h1", { id: "heading" }, "Namaste React");
// React.createElement is a Object but then later convert it into HTML while rendering
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

//Render using JSX
const jsxHeading = (<h1>
  Namaste React using JSX
</h1>);
const rootJSX = ReactDOM.createRoot(document.getElementById("root-jsx"));
rootJSX.render(jsxHeading);

//Render using React component
const Title = () => (
  <h1>Namaste React (functional way)</h1>
);

const SubTitle = () => (
  <div id="container">
  <Title/>
  <h2>by Akshay Saini</h2>
  <Title></Title>
  {"Akshay Saini"}
  </div>
)

const rootComponent = ReactDOM.createRoot(document.getElementById("root-component"))
rootComponent.render(<SubTitle/>)
