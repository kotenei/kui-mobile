import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs, withReadme } from 'storybook-readme';
import SwipeCellDoc from '../../src/components/SwipeCell/README.md';
import Basic from '../../app/containers/SwipeCell/Basic';
import BasicDoc from './doc/Basic.md';
import Customize from '../../app/containers/SwipeCell/Customize';
import CustomizeDoc from './doc/Customize.md';
export default () =>
            storiesOf('SwipeCell', module)
              .addDecorator(withReadme(SwipeCellDoc))
              .add('Basic', withDocs(BasicDoc, () => <h1>示例代码</h1>)).add('Customize', withDocs(CustomizeDoc, () => <h1>示例代码</h1>));