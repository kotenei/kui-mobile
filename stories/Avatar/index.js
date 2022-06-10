import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs, withReadme } from 'storybook-readme';
import AvatarDoc from '../../src/components/Avatar/README.md';
import Basic from '../../app/containers/Avatar/Basic';
import BasicDoc from './doc/Basic.md';
import Size from '../../app/containers/Avatar/Size';
import SizeDoc from './doc/Size.md';
import Square from '../../app/containers/Avatar/Square';
import SquareDoc from './doc/Square.md';
export default () =>
            storiesOf('Avatar', module)
              .addDecorator(withReadme(AvatarDoc))
              .add('Basic', withDocs(BasicDoc, () => <h1>示例代码</h1>)).add('Size', withDocs(SizeDoc, () => <h1>示例代码</h1>)).add('Square', withDocs(SquareDoc, () => <h1>示例代码</h1>));