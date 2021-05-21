import React, {Component} from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Link } from "react-router-dom";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";


export default class RoomJoinPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            guestCanPause: true,
            votesToSkip: this.defaultVotes,
        };
    }

    handleVotesChange(e){
        this.setState({
            votesToSkip: e.target.value,
        })
    }
    
    handleGestCanPauseChange(e){
        this.setState({
            guestCanPause: e.target.value === "true" ? true : false,
        })
    }

    handleRoomButton

    render(){
        return (
            <Grid container spacing = {1}> 
                <Grid item xs = {12} align = "center">

                    <Typography component = "h4" variant = "h4">
                        Join a room
                    </Typography>
                </Grid>

                <Grid item xs = {12} align = "center">
                    <FormControl component = "fieldset">

                        <FormHelperText>
                            <div align = "center">Guest Control of playback state</div>
                        </FormHelperText>

                        <RadioGroup 
                        row 
                        defaultValue = "true"
                        onChange={this.handleGestCanPauseChange}
                        >
                            <FormControlLabel 
                                value = "true" 
                                control = {<Radio color = "primary" />}
                                label = "Play/Pause"
                                labelPlacement = "Bottom" 
                            />

                            <FormControlLabel 
                                value = "false" 
                                control = {<Radio color = "secondary" />}
                                label = "No control"
                                labelPlacement = "Bottom" 
                            />
                        </RadioGroup>

                    </FormControl>
                </Grid>
                <Grid item xs = {12} align = "center">
                    <FormControl>
                        <TextField 
                        onChange = {this.handleVotesChange}
                        required = {true} 
                        type = {Number} 
                        defaultValue = {this.defaultVotes}
                        inputProps = {{ 
                            min:1, 
                            style: {textAlign: "center"}
                        }}
                        />


                        <FormHelperText>
                            <div align="center">
                                 Votes required to skip song
                            </div>
                        </FormHelperText>

                    </FormControl>
                </Grid>

                <Grid item xs = {12} align = "center">
                    <Button color = "primary" variant = "contained">
                        Join a Room
                    </Button>
                </Grid>
                <Grid item xs = {12} align = "center">
                    <Button color = "secondary" variant = "contained" to = "/" component = {Link}>
                        HomePage
                    </Button>
                </Grid>

            </Grid>
            );
    }
}