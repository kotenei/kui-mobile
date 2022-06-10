import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs, withReadme } from 'storybook-readme';
import ModalDoc from '../../src/components/Modal/README.md';
import Basic from '../../app/containers/Modal/Basic';
import BasicDoc from './doc/Basic.md';
import Simple from '../../app/containers/Modal/Simple';
import SimpleDoc from './doc/Simple.md';
import Title from '../../app/containers/Modal/Title';
import TitleDoc from './doc/Title.md';
export default () =>
            storiesOf('Modal', module)
              .addDecorator(withReadme(ModalDoc))
              .add('Basic', withDocs(BasicDoc, () => <h1>示例代码</h1>)).add('Simple', withDocs(SimpleDoc, () => <h1>示例代码</h1>)).add('Title', withDocs(TitleDoc, () => <h1>示例代码</h1>));