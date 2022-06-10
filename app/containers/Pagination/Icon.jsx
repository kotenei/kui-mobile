import React, { Component } from 'react';
import { Pagination, Icon } from 'kui-mobile';

export default class Demo extends Component {
  render() {
    return (
      <React.Fragment>
        <Pagination
          total={5}
          locale={{
            prevText: (
              <React.Fragment>
                <Icon type="left" /> 
                上一步
              </React.Fragment>
            ),
            nextText: (
              <React.Fragment>
                下一步
                <Icon type="right" />
              </React.Fragment>
            ),
          }}
        />
      </React.Fragment>
    );
  }
}
