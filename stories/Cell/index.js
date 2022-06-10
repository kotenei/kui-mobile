import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs, withReadme } from 'storybook-readme';
import CellDoc from '../../src/components/Cell/README.md';
import Basic from '../../app/containers/Cell/Basic';
import BasicDoc from './doc/Basic.md';
export default () =>
            storiesOf('Cell', module)
              .addDecorator(withReadme(CellDoc))
              .add('Basic', withDocs(BasicDoc, () => <h1>示例代码</h1>));