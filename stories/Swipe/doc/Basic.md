```jsx
import React, { Component } from 'react';
import { Swipe, SwipeItem } from 'kui-mobile';

export default class Demo extends Component {
  render() {
    return (
      <React.Fragment>
        <Swipe style={{ height: 200 }}>
          <SwipeItem>1</SwipeItem>
          <SwipeItem>2</SwipeItem>
          <SwipeItem>3</SwipeItem>
          <SwipeItem>4</SwipeItem>
        </Swipe>
      </React.Fragment>
    );
  }
}

```
