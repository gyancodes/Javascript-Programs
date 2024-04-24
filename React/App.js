import React from "react";
import ReactDOM from "react-dom/client";





/** 
React.createElement => ReactElement-JS Object => HTMLElement(render)

const heading = React.createElement(
    "h1",
    {id: "heading"},
    "Hello World"
)

*/


// JSX (transpiled before it reaches the JS) - using PARCEL - Babel
// JSX => React.createElement
// JSX is not a pure javascript of HTML in JS, of HTML in XML, It's a syntax
const jsxHeading = <h1 id="heading">Hello World</h1>


// /**
//  <div id="parent">
//         <div id="child">
//           <h1>I'm h1 tag</h1>
//           <h2>I'm h2 tag</h2>
//         </div>
//         <div id="child2">
//           <h1>I'm h1 tag</h1>
//           <h2>I'm h2 tag</h2>  
//         </div>
//       </div>
//  */

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", { class: "h1tag" }, "I'm h1 tag"),
//     React.createElement("h2", {}, "Hello World"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "I'm h1 tag"),
//     React.createElement("h2", {}, "I'm h2 tag"),
//   ])
// );

// // const heading = React.createElement(
// //   "h1",
// //   { id: "heading" },
// //   "Hello World from React!"
// // );

// // console.log(heading);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);
