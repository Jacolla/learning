import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { Grid, Button, Typography } from "@material-ui/core";

export default class Room extends Component {
  constructor(props) {
    super(props);
    this.state = {
      votesToSkip: 2,
      guestCanPause: false,
      isHost: false,
      showSettings: false,
    };
    this.roomCode = this.props.match.params.roomCode;
    this.getRoomDetails();
    this.leaveButtonPressed = this.leaveButtonPressed.bind(this);
    this.updateshowSettings = this.updateshowSettings.bind(this);
  }

  getRoomDetails() {
    fetch("/api/get-room" + "?code=" + this.roomCode)
      .then((response) => {
        if (!response.ok) {
          this.props.leaveRoomCallback();
          this.props.history.push("/");
        }
        return response.json();
      })
      .then((data) => {
        this.setState({
          votesToSkip: data.votes_to_skip,
          guestCanPause: data.guest_can_pause,
          isHost: data.is_host,
        });
      });
  }

  leaveButtonPressed() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    };
    fetch("/api/leave-room", requestOptions).then((_response) => {
      this.props.leaveRoomCallback();
      this.props.history.push("/");
    });
  }

  updateshowSettings(value){
    this.state.guestCanPause({
      showSettings: value,
    })
  }

  renderSettingsButton(){
    return(
      <Grid item xs={12} align="center">
        <Button variant="contained" color="primary" onClick={() => this.updateshowSettings(true)}>
          Settings
        </Button>
      </Grid>
    )
  }

  render() {
    return (
      <Grid container spacing={1}>
        <Grid item xs={12} align="center">
          <Typography variant="h5" component="h5">
            Votes: {this.state.votesToSkip}
          </Typography>
        </Grid>

        <Grid item xs={12} align="center">
          <Typography variant="h5" component="h5">
            Guest can pause: {this.state.guestCanPause.toString()}
          </Typography>
        </Grid>

        <Grid item xs={12} align="center">
          <Typography variant="h5" component="h5">
            Host: {this.state.isHost.toString()}
          </Typography>
        </Grid>
        {this.state.isHost ? this.render.renderSettingsButton() : null}
        <Grid item xs={12} align="center">
          <Button
            color="secondary"
            variant="contained"
            onClick={this.leaveButtonPressed}
          >
            Leave Room
          </Button>
        </Grid>
      </Grid>
    );
  }
}
