import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import Skills from './components/pages/skills/Skills';
import Experiences from './components/pages/experiences/Experiences';
import Certifications from './components/pages/certifications/Certifications';
import Portfolios from './components/pages/portfolios/Portfolios';
import Education from './components/pages/education/Education';
import './App.css';

function App() {
  return (
    <Router>
        <Route exact path="/" component={Home} />
        <Switch>
          <Route path="/skills" component={Skills} />
          <Route path="/experiences" component={Experiences} />
          <Route path="/portfolios" component={Portfolios} />
          <Route path="/education" component={Education} />
          <Route path="/certifications" component={Certifications} />
        </Switch>
    </Router>
  );
}

export default App;
