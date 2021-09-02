import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import Person from './components/Person'
import './App.css';

function App() {
  return (
    <Router>
      <Nav />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/person' component={Person} />
      </Switch>
    </Router>
  );
}

export default App;
