```jsx
import React, { Component } from "react";
import { Progress } from "kui-mobile";

export default class Demo extends Component {
    render() {
        return (
            <React.Fragment>
                <Progress
                    percent={10}
                    color="primary"
                    strokeWidth={20}
                    textInside={true}
                />
                <Progress
                    percent={40}
                    color="warning"
                    strokeWidth={20}
                    textInside={true}
                />
                <Progress
                    percent={100}
                    color="success"
                    strokeWidth={20}
                    textInside={true}
                />
                <Progress
                    percent={80}
                    color="danger"
                    strokeWidth={20}
                    textInside={true}
                />
            </React.Fragment>
        );
    }
}

```
