import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs, withReadme } from 'storybook-readme';
import TabsDoc from '../../src/components/Tabs/README.md';
import Basic from '../../app/containers/Tabs/Basic';
import BasicDoc from './doc/Basic.md';
import Card from '../../app/containers/Tabs/Card';
import CardDoc from './doc/Card.md';
import Position from '../../app/containers/Tabs/Position';
import PositionDoc from './doc/Position.md';
export default () =>
            storiesOf('Tabs', module)
              .addDecorator(withReadme(TabsDoc))
              .add('Basic', withDocs(BasicDoc, () => <h1>示例代码</h1>)).add('Card', withDocs(CardDoc, () => <h1>示例代码</h1>)).add('Position', withDocs(PositionDoc, () => <h1>示例代码</h1>));