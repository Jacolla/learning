import React, {Component} from "react";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
    } from "React-router-dom"

export default class HomePage extends Component {
    constructor(props){
        super(props);
    }
 
    render(){
        return (
        <Router>
            <Switch> 
                <Route exact path= '/' >
                    <p>esto es homePage </p>
                </Route>
                <Route path= '/join' component={RoomJoinPage} />
                <Route path= '/create' component={CreateRoomPage} />
            </Switch>

        </Router>
        
        );
    }
}