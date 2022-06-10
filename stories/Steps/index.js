import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs, withReadme } from 'storybook-readme';
import StepsDoc from '../../src/components/Steps/README.md';
import Basic from '../../app/containers/Steps/Basic';
import BasicDoc from './doc/Basic.md';
import Icon from '../../app/containers/Steps/Icon';
import IconDoc from './doc/Icon.md';
import Status from '../../app/containers/Steps/Status';
import StatusDoc from './doc/Status.md';
import Vertical from '../../app/containers/Steps/Vertical';
import VerticalDoc from './doc/Vertical.md';
export default () =>
            storiesOf('Steps', module)
              .addDecorator(withReadme(StepsDoc))
              .add('Basic', withDocs(BasicDoc, () => <h1>示例代码</h1>)).add('Icon', withDocs(IconDoc, () => <h1>示例代码</h1>)).add('Status', withDocs(StatusDoc, () => <h1>示例代码</h1>)).add('Vertical', withDocs(VerticalDoc, () => <h1>示例代码</h1>));