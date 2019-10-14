import React from 'react';
import usePromise from 'react-promise';
import {
  Container,
  AppBar 
} from '@material-ui/core'
import TweetTable from './components/organisms/TweetTable';
import api from './api'
import './App.css';


function App() {
  const {value, loading} = usePromise(api.getTweets)
  return (
    <div className="App">
      <Container>
        <TweetTable {...value}></TweetTable>
      </Container>
    </div>
  );
}

export default App;
