import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs, withReadme } from 'storybook-readme';
import NavBarDoc from '../../src/components/NavBar/README.md';
import Basic from '../../app/containers/NavBar/Basic';
import BasicDoc from './doc/Basic.md';
export default () =>
            storiesOf('NavBar', module)
              .addDecorator(withReadme(NavBarDoc))
              .add('Basic', withDocs(BasicDoc, () => <h1>示例代码</h1>));