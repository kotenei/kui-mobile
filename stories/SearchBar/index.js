import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs, withReadme } from 'storybook-readme';
import SearchBarDoc from '../../src/components/SearchBar/README.md';
import Basic from '../../app/containers/SearchBar/Basic';
import BasicDoc from './doc/Basic.md';
import CancelButton from '../../app/containers/SearchBar/CancelButton';
import CancelButtonDoc from './doc/CancelButton.md';
export default () =>
            storiesOf('SearchBar', module)
              .addDecorator(withReadme(SearchBarDoc))
              .add('Basic', withDocs(BasicDoc, () => <h1>示例代码</h1>)).add('CancelButton', withDocs(CancelButtonDoc, () => <h1>示例代码</h1>));