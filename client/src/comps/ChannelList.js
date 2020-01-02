import React, { Component } from 'react'
import Live from './Live'
import NotLive from './NotLive'

export default class ChannelList extends Component {
    render() {
        const { channels } = this.props;
        return (
            <div className="channelListContainer">
                {
                    channels.map((channel) => {
                        return (
                            <div>
                                {channel.isLive ? (
                                    <Live channel={channel.user} />
                                ) : (
                                        <NotLive channel={channel.user} />
                                    )}
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
