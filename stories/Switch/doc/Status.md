```jsx
import React, { Component } from 'react';
import { Switch, Button } from 'kui-mobile';

export default class Demo extends Component {
  state = {
    disabled: false,
  };
  handleToggle = () => {
    this.setState({
      disabled: !this.state.disabled,
    });
  };
  render() {
    return (
      <React.Fragment>
        <Switch disabled={this.state.disabled} />
        <br />
        <br />
        <Button onClick={this.handleToggle}>
          Toggle disabled
        </Button>
      </React.Fragment>
    );
  }
}

```
