import React, { Component } from 'react'
import Live from './Live'
import NotLive from './NotLive'

export default class ChannelList extends Component {
	render() {
		const { channels, anyLive } = this.props;
		return (
			<div className="channelListContainer">
				{
					!anyLive ? (
						<NotLive />
					) : (
							channels.map((channel, __index) => {
								return (
									<div>
										{channel.type === 'live' ? (
											<Live channel={channel.user_name} time={channel.started_at} />
										) : (
												null
											)}
									</div>
								)
							})
						)

				}
			</div>
		)
	}
}
