import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import Router from './router';
import './index.scss';

const App = () => {
  return (
    <HashRouter>
      <Route
        render={props => {
          return <Router {...props} />;
        }}
      />
    </HashRouter>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
