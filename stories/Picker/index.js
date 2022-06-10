import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs, withReadme } from 'storybook-readme';
import PickerDoc from '../../src/components/Picker/README.md';
import Basic from '../../app/containers/Picker/Basic';
import BasicDoc from './doc/Basic.md';
import Linkage from '../../app/containers/Picker/Linkage';
import LinkageDoc from './doc/Linkage.md';
import Multiple from '../../app/containers/Picker/Multiple';
import MultipleDoc from './doc/Multiple.md';
export default () =>
            storiesOf('Picker', module)
              .addDecorator(withReadme(PickerDoc))
              .add('Basic', withDocs(BasicDoc, () => <h1>示例代码</h1>)).add('Linkage', withDocs(LinkageDoc, () => <h1>示例代码</h1>)).add('Multiple', withDocs(MultipleDoc, () => <h1>示例代码</h1>));