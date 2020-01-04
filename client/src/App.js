import { Helmet } from 'react-helmet'
import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import CircularProgress from '@material-ui/core/CircularProgress'
import Grid from '@material-ui/core/Grid'
import ChannelList from './comps/ChannelList'
import LiveParticles from './comps/LiveParticles'
import NotLiveParticles from './comps/NotLiveParticles'
import Error from './comps/Error'

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      anyLive: false,
      response: false,
      endpoint: "https://whos-live.herokuapp.com:50082",
      error: false
    };
  }

  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on("FromAPI", (data) => {
      if (data.length === 0) {
        this.setState({
          isLoading: false,
          anyLive: false
        })
      } else {
        this.setState({
          response: data,
          isLoading: false,
          anyLive: true,
          error: false
        })
        console.log(data)
      }
    })
    socket.on("connect_error", (err) => {
      this.setState({ error: err })
      console.error(err)
    })
  }

  render() {
    const { response, isLoading, anyLive, error } = this.state;
    const notLiveBG = `
      html {
        height: 100%;
        background-color: #21D4FD;
        background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);
      }
    `
    const liveBG = `
      html {
        height: 100%;
        width: 100%;
        background-color: #FFE53B;
        background-image: linear-gradient(147deg, #FFE53B 0%, #FF2525 74%);
      }
    `
    return (
      <div className="pageWrapper">
        <Helmet>
          <style type="text/css">{anyLive ? liveBG : notLiveBG}</style>
        </Helmet>
        <Grid container spacing={3} style={{ zIndex: '2' }}>
          <Grid item xs />
          <Grid item md={6}>
            <Grid container direction="column" justify="center" alignItems="stretch">
              {error ? (
                <Error error="Error Connecting to Socket" />
              ) : (
                  <div>
                    {isLoading ? (
                      <CircularProgress color="secondary" />
                    ) : (
                        <ChannelList channels={response} anyLive={anyLive} />
                      )}
                  </div>
                )}
            </Grid>
          </Grid>
          <Grid item xs />
        </Grid>
        {anyLive ? (
          <LiveParticles />

        ) : (
            <NotLiveParticles />

          )}
      </div>
    );
  }
}

export default App;
