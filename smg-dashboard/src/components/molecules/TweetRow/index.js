import React from 'react';
import { 
	TableCell,
	TableRow,
	Button 
} from '@material-ui/core';

import api from '../../../api';

class TweetRow extends React.Component {
	
	constructor(props) {
		super(props);
	}

	render() {
		const tweet = this.props.data;
		return (
			<TableRow className="tweetRow">
				<TableCell>{tweet.text}</TableCell>
				{tweet.isFollow && 
					<TableCell>
						<Button variant="contained">Follow</Button>
					</TableCell>
				}
				{tweet.isRetweet && 
					<TableCell>
						<Button variant="contained">Retweet</Button>
					</TableCell>
				}
				{tweet.isLike && 
					<TableCell>
						<Button variant="contained">Like</Button>
					</TableCell>
				}
				{tweet.isTag && 
					<TableCell>
						<Button variant="contained">Tag</Button>
					</TableCell>
				}
				{tweet.isComment && 
					<TableCell>
						<Button variant="contained">Comment</Button>
					</TableCell>
				}
				{tweet.hasLink && 
					<TableCell>
						<Button onClick={()=> api.automate()} variant="contained">Link</Button>
					</TableCell>
				}

			</TableRow>
		)
	}
}

export default TweetRow;