import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs, withReadme } from 'storybook-readme';
import TabBarDoc from '../../src/components/TabBar/README.md';
import Basic from '../../app/containers/TabBar/Basic';
import BasicDoc from './doc/Basic.md';
import Color from '../../app/containers/TabBar/Color';
import ColorDoc from './doc/Color.md';
export default () =>
            storiesOf('TabBar', module)
              .addDecorator(withReadme(TabBarDoc))
              .add('Basic', withDocs(BasicDoc, () => <h1>示例代码</h1>)).add('Color', withDocs(ColorDoc, () => <h1>示例代码</h1>));