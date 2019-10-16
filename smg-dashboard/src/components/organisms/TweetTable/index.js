import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';

import TweetRow from '../../molecules/TweetRow'

class TweetTable extends React.Component {

	constructor(props){
		super(props)
	}

	render() {
		return (
			<Table className="tweetTable">
				<TableBody>
					{this.props.data && this.props.data.tweets.map((tweet, index) => (
						<TweetRow key={tweet.text} data={tweet} ></TweetRow>
					))}
				</TableBody>
			</Table>
		)
	}
}

export default TweetTable;