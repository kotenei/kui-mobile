import React, { Component } from 'react';
import { Divider } from 'kui-mobile';

export default class Demo extends Component {
  render() {
    return (
      <React.Fragment>
        <Divider /><br/>
        <Divider color="primary" /><br/>
        <Divider color="info" /><br/>
        <Divider color="warning" /><br/>
        <Divider color="success" /><br/>
        <Divider color="danger" /><br/>
      </React.Fragment>
    );
  }
}
