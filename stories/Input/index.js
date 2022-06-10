import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs, withReadme } from 'storybook-readme';
import InputDoc from '../../src/components/Input/README.md';
import Basic from '../../app/containers/Input/Basic';
import BasicDoc from './doc/Basic.md';
import Disabled from '../../app/containers/Input/Disabled';
import DisabledDoc from './doc/Disabled.md';
import TextArea from '../../app/containers/Input/TextArea';
import TextAreaDoc from './doc/TextArea.md';
import Title from '../../app/containers/Input/Title';
import TitleDoc from './doc/Title.md';
export default () =>
            storiesOf('Input', module)
              .addDecorator(withReadme(InputDoc))
              .add('Basic', withDocs(BasicDoc, () => <h1>示例代码</h1>)).add('Disabled', withDocs(DisabledDoc, () => <h1>示例代码</h1>)).add('TextArea', withDocs(TextAreaDoc, () => <h1>示例代码</h1>)).add('Title', withDocs(TitleDoc, () => <h1>示例代码</h1>));