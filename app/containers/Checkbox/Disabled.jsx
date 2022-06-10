import React, { Component } from 'react';
import { Checkbox, CheckboxGroup } from 'kui-mobile';

export default class Demo extends Component {
  render() {
    return (
      <React.Fragment>
        <CheckboxGroup>
          <Checkbox disabled>复选框一</Checkbox>
          <Checkbox>复选框二</Checkbox>
          <Checkbox>复选框三</Checkbox>
        </CheckboxGroup>
      </React.Fragment>
    );
  }
}
