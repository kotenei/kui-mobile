import React, { Component } from 'react';
import { Collapse, CollapsePanel } from 'kui-mobile';

const Panel = CollapsePanel;
const text = `
A dog is a type of domesticated animal.
Known for its loyalty and faithfulness,
it can be found as a welcome guest in many households across the world.
`;

export default class Demo extends Component {
  render() {
    return (
      <Collapse accordion>
        <Panel header="This is panel header 1" id="1">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 2" id="2">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 3" id="3" >
          <p>{text}</p>
        </Panel>
      </Collapse>
    );
  }
}
