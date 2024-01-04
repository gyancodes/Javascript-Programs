const heading = React.createElement(
  "h1",
  { id: "heading", title: "This is a title." },
  "My First React Element"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

