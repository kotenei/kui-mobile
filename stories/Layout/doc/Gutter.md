```jsx
import React, { Component } from "react";
import {  Row, Col } from "kui-mobile";

export default class Demo extends Component {
    render() {
        return (
            <Row gutter={16}>
                <Col span={6}>
                    <div className="gutter-box">col-6</div>
                </Col>
                <Col span={6}>
                    <div className="gutter-box">col-6</div>
                </Col>
                <Col span={6}>
                    <div className="gutter-box">col-6</div>
                </Col>
                <Col span={6}>
                    <div className="gutter-box">col-6</div>
                </Col>
            </Row>
        );
    }
}

```
