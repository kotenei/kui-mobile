import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs, withReadme } from 'storybook-readme';
import LayoutDoc from '../../src/components/Layout/README.md';
import Basic from '../../app/containers/Layout/Basic';
import BasicDoc from './doc/Basic.md';
import Flex from '../../app/containers/Layout/Flex';
import FlexDoc from './doc/Flex.md';
import FlexAlign from '../../app/containers/Layout/FlexAlign';
import FlexAlignDoc from './doc/FlexAlign.md';
import Gutter from '../../app/containers/Layout/Gutter';
import GutterDoc from './doc/Gutter.md';
import Offset from '../../app/containers/Layout/Offset';
import OffsetDoc from './doc/Offset.md';
export default () =>
            storiesOf('Layout', module)
              .addDecorator(withReadme(LayoutDoc))
              .add('Basic', withDocs(BasicDoc, () => <h1>示例代码</h1>)).add('Flex', withDocs(FlexDoc, () => <h1>示例代码</h1>)).add('FlexAlign', withDocs(FlexAlignDoc, () => <h1>示例代码</h1>)).add('Gutter', withDocs(GutterDoc, () => <h1>示例代码</h1>)).add('Offset', withDocs(OffsetDoc, () => <h1>示例代码</h1>));