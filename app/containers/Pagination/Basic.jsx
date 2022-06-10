import React, { Component } from 'react';
import { Pagination } from 'kui-mobile';

export default class Demo extends Component {
  render() {
    return (
      <React.Fragment>
        <Pagination total={5}  />
      </React.Fragment>
    );
  }
}
