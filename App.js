// const heading = React.createElement(
//   // React.createElement takes 3 argument Tag, Object, Children (what you have to write inside the tag)
//   "h1",
//   { Id: "heading" }, // Here we write the HTML Attribute in this object
//   "Hello World using React!"
// );

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "This is H1 Tag")
//   )
// );

const parents = React.createElement("div", { id: parent }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "This is Heading1"),
    React.createElement("h2", {}, "This is heading2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "This is Heading1"),
    React.createElement("h2", {}, "This is heading2"),
  ]),
]);

console.log(parents); // This heading is a Javascript Object && a React Element

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parents); // This render take the JS object and convert into an HTML Element
