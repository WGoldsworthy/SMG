import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';

import TestRow from '../../molecules/TestRow'

class TestTable extends React.Component {

	constructor(props){
		super(props)
	}

	render() {
		const { scenarios } = this.props;
		return (
			<Table className="testTable">
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