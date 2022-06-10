import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs, withReadme } from 'storybook-readme';
import CheckboxDoc from '../../src/components/Checkbox/README.md';
import Basic from '../../app/containers/Checkbox/Basic';
import BasicDoc from './doc/Basic.md';
import Cell from '../../app/containers/Checkbox/Cell';
import CellDoc from './doc/Cell.md';
import Disabled from '../../app/containers/Checkbox/Disabled';
import DisabledDoc from './doc/Disabled.md';
import Group from '../../app/containers/Checkbox/Group';
import GroupDoc from './doc/Group.md';
export default () =>
            storiesOf('Checkbox', module)
              .addDecorator(withReadme(CheckboxDoc))
              .add('Basic', withDocs(BasicDoc, () => <h1>示例代码</h1>)).add('Cell', withDocs(CellDoc, () => <h1>示例代码</h1>)).add('Disabled', withDocs(DisabledDoc, () => <h1>示例代码</h1>)).add('Group', withDocs(GroupDoc, () => <h1>示例代码</h1>));