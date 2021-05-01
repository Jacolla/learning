import React, { Component } from "react";
import { render } from "react-dom";

export default class App extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return <h1> <h2>testWebSite</h2> </h1> 
    }
}

const appDiv= document.getElementById('App');
render (<App  />, appDiv);