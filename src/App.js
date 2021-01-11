import React from 'react';
import Start from 'pages/MainPage';
import MovieDetails from 'pages/MovieDetails';
import TvDetails from 'pages/TvDetails';
import PersonDetails from 'pages/PersonDetails';
import { SearchBar } from 'components'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <SearchBar />
        <Switch>
          <Route isExact path='/details/tv/:id'>
            <TvDetails />
          </Route>
          <Route isExact path='/details/movie/:id'>
            <MovieDetails />
          </Route>
          <Route isExact path='/details/person/:id'>
            <PersonDetails />
          </Route>
          <Route path='/'>
            <Start />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
