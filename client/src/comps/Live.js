import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import LinearProgress from '@material-ui/core/LinearProgress'
import Moment from 'react-moment';

export default class Live extends Component {
  render() {
    const { channel, time } = this.props
    return (
      <div key={this.props.key} style={{ paddingTop: '10px' }}>
        <Card raised={true} >
          <CardContent style={{ textAlign: 'center' }}>
            <Typography variant="h4">
              {channel}
            </Typography>
            <Typography variant="h4" style={{ color: '#f00', fontWeight: 'bold' }}>
              LIVE NOW
              <span>
                <LinearProgress color="secondary" />
              </span>
            </Typography>
            <Typography>
              <Moment fromNow>{time}</Moment>
            </Typography>
          </CardContent>
        </Card>
      </div>
    )
  }
}