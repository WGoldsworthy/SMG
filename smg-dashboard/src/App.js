import React from 'react';
import usePromise from 'react-promise';
import {
  Container,
} from '@material-ui/core'
import TestTable from './components/organisms/TestTable';
import Menu from './components/organisms/Menu';
import TestDataProvider, { TestDataConsumer } from './data/TestDataContext';
import api from './api'
import './App.css';


function App() {
  // const {value, loading} = usePromise(api.getScenarios)

  return (
    <div className="App">
      <TestDataProvider>
        <Container>
          <Menu></Menu>
          <TestDataConsumer>
            {ctx => (
                <TestTable scenarios={ctx.state.scenarios}></TestTable>
              )
            }
          </TestDataConsumer>
        </Container>
      </TestDataProvider>
    </div>
  );
}

export default App;
