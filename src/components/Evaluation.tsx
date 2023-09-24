import React from 'react';
import MyTable from './MyTable';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Layout from '../layouts/Layout'

function Evaluation() {
  return (
    <Layout>
      <div className="Evaluation">
        <Link to="/evaluation/my_Table">My table</Link>
      </div>
    </Layout>
      
  );
}

export default Evaluation;