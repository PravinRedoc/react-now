const heading = React.createElement("h1",{"id" : "root","xyz":"xyz"},"Hello, this is created by REACT");
        const root = ReactDOM.createRoot(document.getElementById("root"));
        console.log(heading);
        root.render(heading);