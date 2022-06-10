import React, { Component } from 'react';
import { Row, Col } from 'kui-mobile';

export default class Demo extends Component {
  render() {
    return (
      <React.Fragment>
        <Row >
          <Col span={12}>
            <div className="gutter-box">col-12</div>
          </Col>
          <Col span={12}>
            <div className="gutter-box">col-12</div>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <div className="gutter-box">col-8</div>
          </Col>
          <Col span={8}>
            <div className="gutter-box">col-8</div>
          </Col>
          <Col span={8}>
            <div className="gutter-box">col-8</div>
          </Col>
        </Row>
        <Row>
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
      </React.Fragment>
    );
  }
}
