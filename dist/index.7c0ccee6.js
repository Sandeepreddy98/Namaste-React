//<h1>Hello from react!</h1>
// const heading = React.createElement("h1", {id : 'heading'}, "Hello world from React!");// react Object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
/**
 * <div id = "parent">
 *     <div id = "child">
 *         <h1>I'm a h1 tag</h1>
 *     </div>
 * </div>
*/ const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child1"
    }, [
        React.createElement("h1", {}, "I'm h1 tag"),
        React.createElement("h2", {}, "I'm h2 tag")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {}, "I'm h1 tag"),
        React.createElement("h2", {}, "I'm h2 tag")
    ])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.7c0ccee6.js.map
