import React, { Component } from "react";
import { Badge } from "kui-mobile";

export default class Demo extends Component {
    render() {
        return (
            <React.Fragment>
                <Badge dot color="danger">
                    <a
                        href="javascript:void(0);"
                        style={{
                            width: 42,
                            height: 42,
                            borderRadius: 4,
                            background: "#eee",
                            display: "inline-block"
                        }}
                    />
                </Badge>
                &nbsp;&nbsp;
                <Badge text={11} overflowCount={10}>
                    <a
                        href="javascript:void(0);"
                        style={{
                            width: 42,
                            height: 42,
                            borderRadius: 4,
                            background: "#eee",
                            display: "inline-block"
                        }}
                    />
                </Badge>
            </React.Fragment>
        );
    }
}
