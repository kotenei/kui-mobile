import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs, withReadme } from 'storybook-readme';
import PaginationDoc from '../../src/components/Pagination/README.md';
import Basic from '../../app/containers/Pagination/Basic';
import BasicDoc from './doc/Basic.md';
import HideNumber from '../../app/containers/Pagination/HideNumber';
import HideNumberDoc from './doc/HideNumber.md';
import Icon from '../../app/containers/Pagination/Icon';
import IconDoc from './doc/Icon.md';
import Number from '../../app/containers/Pagination/Number';
import NumberDoc from './doc/Number.md';
import Pointer from '../../app/containers/Pagination/Pointer';
import PointerDoc from './doc/Pointer.md';
export default () =>
            storiesOf('Pagination', module)
              .addDecorator(withReadme(PaginationDoc))
              .add('Basic', withDocs(BasicDoc, () => <h1>示例代码</h1>)).add('HideNumber', withDocs(HideNumberDoc, () => <h1>示例代码</h1>)).add('Icon', withDocs(IconDoc, () => <h1>示例代码</h1>)).add('Number', withDocs(NumberDoc, () => <h1>示例代码</h1>)).add('Pointer', withDocs(PointerDoc, () => <h1>示例代码</h1>));