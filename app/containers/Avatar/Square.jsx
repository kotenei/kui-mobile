import React, { Component } from 'react';
import { Avatar, Icon } from 'kui-mobile';

export default class Demo extends Component {
  render() {
    return (
      <React.Fragment>
        <Avatar icon={<Icon type="calendar" />} square />
        &nbsp;
        <Avatar square color="danger" icon="folder" square />
        &nbsp;
        <Avatar color="primary" square>
          LS
        </Avatar>
        &nbsp;
        <Avatar src="https://avatars2.githubusercontent.com/u/3725164?s=460&v=4" square />
      </React.Fragment>
    );
  }
}
