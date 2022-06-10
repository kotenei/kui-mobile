import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs, withReadme } from 'storybook-readme';
import SwipeDoc from '../../src/components/Swipe/README.md';
import Basic from '../../app/containers/Swipe/Basic';
import BasicDoc from './doc/Basic.md';
import Event from '../../app/containers/Swipe/Event';
import EventDoc from './doc/Event.md';
import Vertical from '../../app/containers/Swipe/Vertical';
import VerticalDoc from './doc/Vertical.md';
export default () =>
            storiesOf('Swipe', module)
              .addDecorator(withReadme(SwipeDoc))
              .add('Basic', withDocs(BasicDoc, () => <h1>示例代码</h1>)).add('Event', withDocs(EventDoc, () => <h1>示例代码</h1>)).add('Vertical', withDocs(VerticalDoc, () => <h1>示例代码</h1>));