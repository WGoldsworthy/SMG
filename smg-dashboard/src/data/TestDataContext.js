import React from 'react';
import api from '../api';

const TestDataContext = React.createContext();

class TestDataProvider extends React.Component {
	
	constructor(props) {
		super(props);

		this.state = {
			waiting: false,
			scenarios: [],
			searchQuery: ""
		}

		this.getScenarios = this.getScenarios.bind(this);
	}

	componentDidMount() {
		this.getScenarios();
	}

	getScenarios() {
		api.getScenarios.then(res => {
			console.log(res)
			this.setState({scenarios: res.data})
		});
	}

	render() {
		const { children } = this.props
		return (
			<TestDataContext.Provider
				value={{
					state: this.state,
					getScenarios: this.getScenarios
				}}
			>
				{children}
			</TestDataContext.Provider>
		);
	}
}

export default TestDataProvider;
export const TestDataConsumer = TestDataContext.Consumer;