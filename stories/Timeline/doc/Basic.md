```jsx
import React, { Component } from 'react';
import { Timeline, TimelineItem, Icon } from 'kui-mobile';

export default class Demo extends Component {
  render() {
    return (
      <Timeline>
        <TimelineItem>2012</TimelineItem>
        <TimelineItem color="info">2013</TimelineItem>
        <TimelineItem color="success">2014</TimelineItem>
        <TimelineItem color="warning">2015</TimelineItem>
        <TimelineItem
          color="danger"
          dot={<Icon type="clock-circle" style={{ fontSize: '16px' }} />}
        >
          2016
        </TimelineItem>
      </Timeline>
    );
  }
}

```
