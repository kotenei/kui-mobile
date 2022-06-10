import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs, withReadme } from 'storybook-readme';
import SwitchDoc from '../../src/components/Switch/README.md';
import Basic from '../../app/containers/Switch/Basic';
import BasicDoc from './doc/Basic.md';
import Loading from '../../app/containers/Switch/Loading';
import LoadingDoc from './doc/Loading.md';
import Status from '../../app/containers/Switch/Status';
import StatusDoc from './doc/Status.md';
import WordIcon from '../../app/containers/Switch/WordIcon';
import WordIconDoc from './doc/WordIcon.md';
export default () =>
            storiesOf('Switch', module)
              .addDecorator(withReadme(SwitchDoc))
              .add('Basic', withDocs(BasicDoc, () => <h1>示例代码</h1>)).add('Loading', withDocs(LoadingDoc, () => <h1>示例代码</h1>)).add('Status', withDocs(StatusDoc, () => <h1>示例代码</h1>)).add('WordIcon', withDocs(WordIconDoc, () => <h1>示例代码</h1>));