import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
    <h1>React is Awesome</h1>
)

const HeadingComponent = () => (
    <div>
        <Title/>
        <h1>This is a functional component</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>)