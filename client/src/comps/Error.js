import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

export default class NotLive extends Component {
  render() {
    return (
      <div style={{ paddingTop: '10px' }}>
        <Card raised={true}>
          <CardContent style={{ textAlign: 'center' }}>
            <Typography variant="h4" style={{ color: '#f00', fontWeight: 'bold' }}>
              {this.props.error}
            </Typography>
          </CardContent>
        </Card>
      </div>
    )
  }
}
