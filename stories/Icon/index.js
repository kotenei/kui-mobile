import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs, withReadme } from 'storybook-readme';
import IconDoc from '../../src/components/Icon/README.md';
import Basic from '../../app/containers/Icon/Basic';
import BasicDoc from './doc/Basic.md';
export default () =>
            storiesOf('Icon', module)
              .addDecorator(withReadme(IconDoc))
              .add('Basic', withDocs(BasicDoc, () => <h1>示例代码</h1>));