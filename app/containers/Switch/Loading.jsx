import React, { Component } from "react";
import { Switch } from "kui-mobile";

export default class Demo extends Component {
    render() {
        return (
            <React.Fragment>
                <Switch loading />
                <br />
                <br />
                <Switch loading checked />
            </React.Fragment>
        );
    }
}
