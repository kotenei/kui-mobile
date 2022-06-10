import React, { Component } from 'react';
import { TabBar, TabBarItem, Icon } from 'kui-mobile';

export default class Demo extends Component {
  state = {
    activeId: '1',
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
        <TabBar>
          <TabBarItem id="1" icon="android" title="Android" selected={activeId === '1'} onChange={this.handleChange} />
          <TabBarItem id="2"icon="apple" title="Apple" dot selected={activeId === '2'} onChange={this.handleChange} />
          <TabBarItem id="3"icon="windows" title="Windows" badge={20} selected={activeId === '3'} onChange={this.handleChange} />
          <TabBarItem id="4" icon="github" title="Github" badge="new" selected={activeId === '4'} onChange={this.handleChange} />
        </TabBar>
      </React.Fragment>
    );
  }
}
