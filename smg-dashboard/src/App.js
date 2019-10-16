import React from 'react';
import usePromise from 'react-promise';
import {
  Container,
} from '@material-ui/core'
import TweetTable from './components/organisms/TweetTable';
import Menu from './components/organisms/Menu';
import TweetDataProvider, { TweetDataConsumer } from './data/TweetDataContext';
import api from './api'
import './App.css';


function App() {
  const {value, loading} = usePromise(api.getTweets)

  return (
    <div className="App">
      <TweetDataProvider>
        <Container>
          <Menu></Menu>
          <TweetDataConsumer>
            {ctx => (
                <TweetTable {...ctx.state.tweets}></TweetTable>
              )
            }
          </TweetDataConsumer>
        </Container>
      </TweetDataProvider>
    </div>
  );
}

export default App;
