import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class TweetTable extends React.Component {

	constructor(props) {
		super(props);

		console.log(props.data)
	}



	render(props) {
		console.log(props)
		return (
			<div></div>
		)
	}
}

export default TweetTable;