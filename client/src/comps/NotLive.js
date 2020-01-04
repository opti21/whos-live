import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

export default class NotLive extends Component {
  render() {
    return (
      <div style={{ paddingTop: '10px', opacity: '30%' }}>
        <Card raised={true} style={{ width: '100%' }}>
          <CardContent style={{ textAlign: 'center' }}>
            <Typography variant="h4" style={{ color: '#f00', fontWeight: 'bold' }}>
              Nobody is live rn :(
            </Typography>
          </CardContent>
        </Card>
      </div>
    )
  }
}
