import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages';
import Admin from './Pages/admin';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/" component={Admin} />
      </Switch>
    </Router>
  );
}

export default App;
