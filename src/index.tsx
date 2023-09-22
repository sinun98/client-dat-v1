import React from 'react';
import ReactDOM from 'react-dom/client';
import Evaluation from './components/Evaluation';
import MyTable from './components/MyTable';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect 
  } from "react-router-dom";



const rootElement= document.getElementById('root')!;

var root = ReactDOM.createRoot(rootElement)!;
root.render(
    <Router>
      <Route exact path="/evaluation" component={Evaluation} />
      <Route path="/evaluation/my_Table" component={MyTable} />
      <Redirect from="/" to="/evaluation" />
     
    </Router>
);

