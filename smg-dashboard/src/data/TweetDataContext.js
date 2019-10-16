import React from 'react';
import api from '../api';

const TweetDataContext = React.createContext();

class TweetDataProvider extends React.Component {
	
	constructor(props) {
		super(props);

		this.state = {
			waiting: false,
			tweets: [],
			searchQuery: ""
		}

		this.searchTweets = this.searchTweets.bind(this);
	}

	componentDidMount() {
		this.searchTweets("");
	}

	searchTweets(query) {
		console.log(query)
		api.searchTweets(query).then(res => {
			console.log(res)
			this.setState({tweets: res})
		});
	}

	render() {
		const { children } = this.props
		return (
			<TweetDataContext.Provider
				value={{
					state: this.state,
					searchTweets: this.searchTweets
				}}
			>
				{children}
			</TweetDataContext.Provider>
		);
	}
}

export default TweetDataProvider;
export const TweetDataConsumer = TweetDataContext.Consumer;