import React, { Component } from 'react';
import { Button } from 'kui-mobile';

export default class Demo extends Component {
  render() {
    return (
      <React.Fragment>
        <Button>default</Button>
        &nbsp;&nbsp;
        <Button color="primary">primary</Button>
        &nbsp;&nbsp;
        <Button color="info">info</Button>
        &nbsp;&nbsp;
        <Button color="success">success</Button>
        &nbsp;&nbsp;
        <Button color="warning">warning</Button>
        &nbsp;&nbsp;
        <Button color="danger" >danger</Button>
        &nbsp;&nbsp;
        <Button disabled>disabled</Button>
      </React.Fragment>
    );
  }
}
