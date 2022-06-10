```jsx
import React, { Component } from 'react';
import { TabBar, TabBarItem, Icon } from 'kui-mobile';

export default class Demo extends Component {
    state = {
        activeId: '2',
      };
      handleChange = id => {
        this.setState({
          activeId: id,
        });
      };
  render() {
    const { activeId } = this.state;
    return (
      <React.Fragment>
        <TabBar activeColor="#4caf50">
          <TabBarItem id="1" icon="android" title="Android" selected={activeId === '1'} onChange={this.handleChange}/>
          <TabBarItem id="2" icon="apple" title="Apple" selected={activeId === '2'} onChange={this.handleChange} />
          <TabBarItem id="3" icon="windows" title="Windows" selected={activeId === '3'} onChange={this.handleChange}/>
          <TabBarItem id="4" icon="github" title="Github" selected={activeId === '4'} onChange={this.handleChange}/>
        </TabBar>
      </React.Fragment>
    );
  }
}

```
