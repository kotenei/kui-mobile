import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs, withReadme } from 'storybook-readme';
import BadgeDoc from '../../src/components/Badge/README.md';
import Basic from '../../app/containers/Badge/Basic';
import BasicDoc from './doc/Basic.md';
import Dot from '../../app/containers/Badge/Dot';
import DotDoc from './doc/Dot.md';
export default () =>
            storiesOf('Badge', module)
              .addDecorator(withReadme(BadgeDoc))
              .add('Basic', withDocs(BasicDoc, () => <h1>示例代码</h1>)).add('Dot', withDocs(DotDoc, () => <h1>示例代码</h1>));