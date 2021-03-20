import * as React from "react";
import * as ReactDOM from "react-dom";
import * as ClockComponent from "./clock-component"

let clockComponent = <ClockComponent.ClockComponent />

ReactDOM.render(
    <div>
        <h1>Hello World</h1>
        <div>{clockComponent}</div>
    </div>,
    document.getElementById('root'));