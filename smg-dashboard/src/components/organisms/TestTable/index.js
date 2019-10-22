import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TestRow from '../../molecules/TestRow'

class TestTable extends React.Component {

	constructor(props){
		super(props)
	}

	render() {
		const { scenarios } = this.props;
		return (
			<Table className="testTable">
				<TableHead>
					<TableCell>Test Scenario</TableCell>
					<TableCell align='center'>Pass/Fail</TableCell>
					<TableCell>Run Test</TableCell>
				</TableHead>
				<TableBody>
				{scenarios.length > 0 && scenarios.map((scenarioGroup, index) => (
					scenarioGroup.map((scenario, index) => (
						<TestRow key={scenario.title} scenario={scenario}></TestRow>
					))
				))}
				</TableBody>	
			</Table>
		)
	}
}

export default TestTable;