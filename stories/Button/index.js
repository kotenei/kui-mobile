import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs, withReadme } from 'storybook-readme';
import ButtonDoc from '../../src/components/Button/README.md';
import Basic from '../../app/containers/Button/Basic';
import BasicDoc from './doc/Basic.md';
import Group from '../../app/containers/Button/Group';
import GroupDoc from './doc/Group.md';
import Icon from '../../app/containers/Button/Icon';
import IconDoc from './doc/Icon.md';
import Size from '../../app/containers/Button/Size';
import SizeDoc from './doc/Size.md';
export default () =>
            storiesOf('Button', module)
              .addDecorator(withReadme(ButtonDoc))
              .add('Basic', withDocs(BasicDoc, () => <h1>示例代码</h1>)).add('Group', withDocs(GroupDoc, () => <h1>示例代码</h1>)).add('Icon', withDocs(IconDoc, () => <h1>示例代码</h1>)).add('Size', withDocs(SizeDoc, () => <h1>示例代码</h1>));