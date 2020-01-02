import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import LinearProgress from '@material-ui/core/LinearProgress'

export default class Live extends Component {
  render() {
    return (
      <div key={this.props.key} style={{ paddingTop: '10px' }}>
        <Card raised={true} style={{ width: '100%' }}>
          <CardContent style={{ textAlign: 'center' }}>
            <Typography variant="h3">
              {this.props.channel}
            </Typography>
            <Typography variant="h4" style={{ color: '#f00', fontWeight: 'bold' }}>
              LIVE NOW
              <span>
                <LinearProgress color="secondary" />
              </span>
            </Typography>
          </CardContent>
        </Card>
      </div>
    )
  }
}