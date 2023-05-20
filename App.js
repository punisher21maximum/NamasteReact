const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "Hello World" },
  "Hello world"
);

console.log(heading);

const root = ReactDom.createRoot(document.getElementById("root"));

console.log(root.render(heading));
