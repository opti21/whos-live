import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Typography color="inherit">
                            Who's Live
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}
