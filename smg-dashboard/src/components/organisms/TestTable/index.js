import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';

import TestRow from '../../molecules/TestRow'

class TestTable extends React.Component {

	constructor(props){
		super(props)
	}

	render() {
		const scenarios = this.props;
		console.log(scenarios)
		return (
			<Table className="testTable">
				<TableBody>
					{scenarios && scenarios.map((scenario, index) => (
						<TestRow key={scenario.title} data={scenario.title} ></TestRow>
					))}
				</TableBody>
			</Table>
		)
	}
}

export default TestTable;