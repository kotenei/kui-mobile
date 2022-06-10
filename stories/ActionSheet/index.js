import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs, withReadme } from 'storybook-readme';
import ActionSheetDoc from '../../src/components/ActionSheet/README.md';
import Basic from '../../app/containers/ActionSheet/Basic';
import BasicDoc from './doc/Basic.md';
import Cancel from '../../app/containers/ActionSheet/Cancel';
import CancelDoc from './doc/Cancel.md';
import Title from '../../app/containers/ActionSheet/Title';
import TitleDoc from './doc/Title.md';
export default () =>
            storiesOf('ActionSheet', module)
              .addDecorator(withReadme(ActionSheetDoc))
              .add('Basic', withDocs(BasicDoc, () => <h1>示例代码</h1>)).add('Cancel', withDocs(CancelDoc, () => <h1>示例代码</h1>)).add('Title', withDocs(TitleDoc, () => <h1>示例代码</h1>));