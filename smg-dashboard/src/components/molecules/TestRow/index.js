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

	runTest = () => {
		api.automate(this.props.scenario);
	}

	render() {
		const { scenario } = this.props;
		return (
			<TableRow className="testRow">
				<TableCell>{scenario.title}</TableCell>
				<TableCell>
					<Button
						onClick={this.runTest}
					>Run</Button>
				</TableCell>
			</TableRow>
		)
	}
}

export default TestRow;