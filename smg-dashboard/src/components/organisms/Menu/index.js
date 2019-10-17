import React from 'react';
import { TextField, Button } from '@material-ui/core'
import { TweetDataConsumer } from '../../../data/TweetDataContext';

import api from '../../../api';

class Menu extends React.Component {
	constructor(props) {
		super(props)
	}

	searchTweets(query) {
		api.searchTweets(query).then(res => {
			console.log(res)
		});
	}

	render(props) {
		return (
			<div className="menu">
				<TweetDataConsumer>
					{ctx => (
						<TextField 
							id="search-tweets"
							label="Search"
					        onBlur={(e) => ctx.searchTweets(e.target.value)}
					        margin="normal"
						/>
					)}
				</TweetDataConsumer>
				<Button onClick={api.getScenarios}>Scenarios</Button>
			</div>
		)
	}
}

export default Menu;