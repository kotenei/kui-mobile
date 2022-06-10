import React, { Component } from 'react';
import { Loading } from 'kui-mobile';

export default class Demo extends Component {
  render() {
    return (
      <React.Fragment>
        <Loading size="sm" color="warning"/>
        <Loading color="danger"/>
        <Loading size="lg" color="success"/>
      </React.Fragment>
    );
  }
}
