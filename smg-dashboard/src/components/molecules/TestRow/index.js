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

		this.state = {
			beenRun: false,
			passed: false
		}
	}

	runTest = () => {
		api.automate(this.props.scenario).then(result => {
			this.setState({
				beenRun: true,
				passed: result.passed
			})
		});
	}

	render() {
		const { scenario } = this.props;
		const { beenRun, passed } = this.state;
		return (
			<TableRow className="testRow">
				<TableCell>{scenario.title}</TableCell>
				{beenRun && (
					<TableCell>{passed ? 'PASSED' : 'FAILED'}</TableCell>
				)}
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