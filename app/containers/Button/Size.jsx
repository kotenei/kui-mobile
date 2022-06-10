import React, { Component } from 'react';
import { Button } from 'kui-mobile';

export default class Demo extends Component {
  render() {
    return (
      <React.Fragment>
        <Button color="primary"  size="xs">
          xs button
        </Button>
        &nbsp;&nbsp;
        <Button color="primary"  size="sm">
          sm button
        </Button>
        &nbsp;&nbsp;
        <Button color="primary" >
          default
        </Button>
        &nbsp;&nbsp;
        <Button color="primary"  size="lg" >
          lg button
        </Button>
        &nbsp;&nbsp;
      </React.Fragment>
    );
  }
}
