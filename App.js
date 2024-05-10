
const MyReactHeading =React.createElement("div" ,{ id:"parentid"},
[React.createElement("div" ,{ id:"child"},[
    React.createElement("h1" ,{ id:"h1id"},"Hello from nested h2 tag"),
    React.createElement("h2" ,{ id:"h2"},"Hello from nested h2 tag")]
),React.createElement("div" ,{ id:"child2"},[
    React.createElement("h1" ,{ id:"h1id"},"Hello from nested h2 tag!"),
    React.createElement("h2" ,{ id:"h2"},"Hello from nested h2 tag!")]
)]);



// const MyReactHeading =React.createElement("h1",{id:"h1id"} ,"Hellow from React! and from App.js and color from app.css");
const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(MyReactHeading);

