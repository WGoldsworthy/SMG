import React from 'react';
import { TextField, Button } from '@material-ui/core'
import { TestDataConsumer } from '../../../data/TestDataContext';

import api from '../../../api';

class Menu extends React.Component {
	constructor(props) {
		super(props)
	}

	getScenarios(query) {
		api.getScenarios().then(res => {
			console.log(res)
		});
	}

	render(props) {
		return (
			<div className="menu">
				<TestDataConsumer>
					{ctx => (
						<TextField 
							id="search-tweets"
							label="Search"
					        // onBlur={(e) => ctx.searchTweets(e.target.value)}
					        margin="normal"
						/>
					)}
				</TestDataConsumer>
			</div>
		)
	}
}

export default Menu;