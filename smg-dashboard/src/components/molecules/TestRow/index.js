import React from 'react';
import { 
	TableCell,
	TableRow,
	Button 
} from '@material-ui/core';

import api from '../../../api';

class TestRow extends React.Component {
	
	constructor(props) {
		super(props);
	}

	render() {
		const scenario = this.props;

		console.log(scenario)
		return (
			<TableRow className="tweetRow">
				<TableCell>{scenario}</TableCell>
			</TableRow>
		)
	}
}

export default TestRow;