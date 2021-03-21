import React, { Component } from "react";
import { render } from "react-dom";

export default class App extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return <h1> <i>Print from App.js</i> </h1>
    }
}
const appDiv= document.getElementById('App');
render (<App />, appDiv);