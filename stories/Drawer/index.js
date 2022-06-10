import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs, withReadme } from 'storybook-readme';
import DrawerDoc from '../../src/components/Drawer/README.md';
import Basic from '../../app/containers/Drawer/Basic';
import BasicDoc from './doc/Basic.md';
export default () =>
            storiesOf('Drawer', module)
              .addDecorator(withReadme(DrawerDoc))
              .add('Basic', withDocs(BasicDoc, () => <h1>示例代码</h1>));