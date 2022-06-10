```jsx
import React, { Component } from 'react';
import { Tabs, TabPanel } from 'kui-mobile';

export default class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabPosition: 'top',
    };
  }
  handleChange = e => {
    this.setState({
      tabPosition: e.target.value,
    });
  };
  render() {
    return (
      <React.Fragment>
        <Tabs tabPosition="left" style={{ height: 200 }}>
          <TabPanel tab="Tab 1">Tab 1</TabPanel>
          <TabPanel tab="Tab 2">Tab 2</TabPanel>
          <TabPanel tab="Tab 3">Tab 3</TabPanel>
          <TabPanel tab="Tab 4">Tab 4</TabPanel>
          <TabPanel tab="Tab 5">Tab 5</TabPanel>
          <TabPanel tab="Tab 6">Tab 6</TabPanel>
          <TabPanel tab="Tab 7">Tab 7</TabPanel>
          <TabPanel tab="Tab 8">Tab 8</TabPanel>
          <TabPanel tab="Tab 9">Tab 9</TabPanel>
        </Tabs>
        <br />
        <Tabs tabPosition="right" type="card">
          <TabPanel tab="Tab 1">Tab 1</TabPanel>
          <TabPanel tab="Tab 2">Tab 2</TabPanel>
          <TabPanel tab="Tab 3">Tab 3</TabPanel>
        </Tabs>
        <br />
        <Tabs tabPosition="bottom" style={{ height: 150 }} type="card">
          <TabPanel tab="Tab 1">Tab 1</TabPanel>
          <TabPanel tab="Tab 2">Tab 2</TabPanel>
          <TabPanel tab="Tab 3">Tab 3</TabPanel>
        </Tabs>
        <br />
      </React.Fragment>
    );
  }
}

```
