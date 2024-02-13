// const heading=React.createElement("h1",{id:"head",xyc:"abc"},"HelloWorld from react");
//         const root=ReactDOM.createRoot(document.getElementById("root"));
//         root.render(heading);

//nested kind of structure
// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     [React.createElement("h1", {}, "I'm from h1 tag"),React.createElement("h2",{},"I'm from h2 tag")]
//   )
// );
// console.log(parent);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

const parent = React.createElement(
    "div",
    { id: "parent" },
    [React.createElement(
      "div",
      { id: "child1" },
      [React.createElement("h1", {}, "I'm from h1 tag"),React.createElement("h2",{},"I'm from h2 tag")]
    ),
    React.createElement(
        "div",
        { id: "child2" },
        [React.createElement("h1", {}, "I'm from h1 tag"),React.createElement("h2",{},"I'm from h2 tag")]
      ),
    ]);
  console.log(parent);
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(parent);//but ugly 

