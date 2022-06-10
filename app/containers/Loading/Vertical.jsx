import React, { Component } from 'react';
import { Loading } from 'kui-mobile';

export default class Demo extends Component {
  render() {
    return (
      <React.Fragment>
        <Loading tip="正在加载，请稍后" vertical/>
      </React.Fragment>
    );
  }
}
