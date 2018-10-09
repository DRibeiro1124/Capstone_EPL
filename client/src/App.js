import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import HomePage from './components/HomePage.jsx';
import Teams from './components/Teams.jsx';
import Team from './components/Team.jsx';
import Players from './components/Players.jsx';
import Managers from './components/Managers.jsx';
import Stadiums from './components/Stadiums.jsx';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <section>
            <Header />
          </section>
          <section>
          <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/teams" exact component={Teams} />
              <Route path="/teams/:id" exact component={Team} />
              <Route path="/players" exact component={Players} />
              <Route path="/managers" exact component={Managers} />
              <Route path="/stadiums" exact component={Stadiums} />
            </Switch>
          </section>
        </div>
      </Router>
    );
  }
}

export default App;
