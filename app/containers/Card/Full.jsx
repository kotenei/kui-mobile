import React, { Component } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Icon } from 'kui-mobile';

export default class Demo extends Component {
  render() {
    return (
      <React.Fragment>
        <Card full>
          <CardHeader extra="extra header content">This is title</CardHeader>
          <CardBody>This is content of `Card`</CardBody>
          <CardFooter extra="extra footer content">footer content</CardFooter>
        </Card>
      </React.Fragment>
    );
  }
}
