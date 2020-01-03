import { Helmet } from 'react-helmet'
import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import { Grid, CircularProgress } from '@material-ui/core'
import NavBar from './comps/NavBar'
import ChannelList from './comps/ChannelList'

class App extends Component {
  constructor() {
    super();
    this.state = {
      anyLive: true,
      channel: 'ThePrimeagen',
      response: false,
      endpoint: "localhost:4002"
    };
  }

  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on("FromAPI", data => { this.setState({ response: data }) }
  }

  render() {
    const { response } = this.state;
    return (
      <div className="appliction">
        <NavBar />
        <Grid container spacing={3} >
          <Grid item xs />
          <Grid item xs={6}>
            <Grid container direction="column" justify="center" alignItems="stretch">
              <div>
                {response ? (
                  <ChannelList channels={response} />
                ) : (
                    <CircularProgress color="secondary" />
                  )}
              </div>
            </Grid>
          </Grid>
          <Grid item xs />
        </Grid>
      </div>
    );
  }
}

export default App;
