import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs, withReadme } from 'storybook-readme';
import LoadingDoc from '../../src/components/Loading/README.md';
import Basic from '../../app/containers/Loading/Basic';
import BasicDoc from './doc/Basic.md';
import Color from '../../app/containers/Loading/Color';
import ColorDoc from './doc/Color.md';
import Size from '../../app/containers/Loading/Size';
import SizeDoc from './doc/Size.md';
import Tip from '../../app/containers/Loading/Tip';
import TipDoc from './doc/Tip.md';
import Vertical from '../../app/containers/Loading/Vertical';
import VerticalDoc from './doc/Vertical.md';
export default () =>
            storiesOf('Loading', module)
              .addDecorator(withReadme(LoadingDoc))
              .add('Basic', withDocs(BasicDoc, () => <h1>示例代码</h1>)).add('Color', withDocs(ColorDoc, () => <h1>示例代码</h1>)).add('Size', withDocs(SizeDoc, () => <h1>示例代码</h1>)).add('Tip', withDocs(TipDoc, () => <h1>示例代码</h1>)).add('Vertical', withDocs(VerticalDoc, () => <h1>示例代码</h1>));