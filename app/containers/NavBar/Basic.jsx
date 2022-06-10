import React, { Component } from 'react';
import { NavBar, Icon } from 'kui-mobile';

export default class Demo extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar icon={<Icon type="left" />} rightContent={<Icon type="search" />}>
          标题
        </NavBar>
        <br />
        <NavBar
          mode='dark'
          icon={<Icon type="left" />}
          leftContent="返回"
          rightContent={<Icon type="search" />}
        >
          标题
        </NavBar>
      </React.Fragment>
    );
  }
}
