import React from 'react';
import {
  Container,
  AppBar 
} from '@material-ui/core'
import TweetTable from './components/organisms/TweetTable';
import api from './api'
import './App.css';

function fetchTweets() {
  api.getTweets.then(function(response) {
    console.log(response)
    return response;
  })
}


function App() {
  return (
    <div className="App">
      <Container>
        <TweetTable data={fetchTweets()}></TweetTable>
      </Container>
    </div>
  );
}

export default App;
