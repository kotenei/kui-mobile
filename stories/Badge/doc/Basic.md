```jsx
import React, { Component } from "react";
import { Badge } from "kui-mobile";

export default class Demo extends Component {
    render() {
        return (
            <React.Fragment>
                <Badge color="primary" text={101} overflowCount={99} />
                <Badge color="info" text={10} />
                <Badge color="success" text={10} />
                <Badge color="warning" text={10} />
                <Badge color="danger" text={10} />
            </React.Fragment>
        );
    }
}

```
