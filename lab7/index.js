import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from "./App";
import Greeter from "./Greeter";
import LikeButton from "./LikeButton";
//import Display from "./components/Display";

import * as serviceWorker from "./serviceWorker";


const Display = () => {
    return (
    [<Greeter />,
    <LikeButton />]
    );
};


ReactDOM.render(<Display />,document.getElementById("root"));



serviceWorker.unregister();