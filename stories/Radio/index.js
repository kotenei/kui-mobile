import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs, withReadme } from 'storybook-readme';
import RadioDoc from '../../src/components/Radio/README.md';
import Basic from '../../app/containers/Radio/Basic';
import BasicDoc from './doc/Basic.md';
import Cell from '../../app/containers/Radio/Cell';
import CellDoc from './doc/Cell.md';
import Disabled from '../../app/containers/Radio/Disabled';
import DisabledDoc from './doc/Disabled.md';
export default () =>
            storiesOf('Radio', module)
              .addDecorator(withReadme(RadioDoc))
              .add('Basic', withDocs(BasicDoc, () => <h1>示例代码</h1>)).add('Cell', withDocs(CellDoc, () => <h1>示例代码</h1>)).add('Disabled', withDocs(DisabledDoc, () => <h1>示例代码</h1>));