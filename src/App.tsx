import React from 'react';
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from 'react-router-dom';
import Evaluation from './components/Evaluation';
import MyTable from './components/MyTable';

function App() {
  return (
    <Switch>
      <Route exact path="/evaluation" component={Evaluation} />
      <Route path="/evaluation/my_Table" component={MyTable} />
      <Redirect from="/" to="/evaluation" />
    </Switch>
  );
}

export default App;
