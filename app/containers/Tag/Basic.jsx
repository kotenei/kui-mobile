import React, { Component } from 'react';
import { Tag } from 'kui-mobile';

export default class Demo extends Component {
  handleClose = () => {
    return true;
  };
  render() {
    return (
      <React.Fragment>
        <Tag>default</Tag>
        <Tag closable onClose={this.handleClose}>closable</Tag>
        <Tag closable color="primary" onClose={this.handleClose}>
          primary
        </Tag>
        <Tag closable color="info" onClose={this.handleClose}>
          info
        </Tag>
        <Tag closable color="success" onClose={this.handleClose}>
          success
        </Tag>
        <Tag closable color="warning" onClose={this.handleClose}>
          warning
        </Tag>
        <Tag closable color="danger" onClose={this.handleClose}>
          danger
        </Tag>
      </React.Fragment>
    );
  }
}
