import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs, withReadme } from 'storybook-readme';
import ProgressDoc from '../../src/components/Progress/README.md';
import Circle from '../../app/containers/Progress/Circle';
import CircleDoc from './doc/Circle.md';
import Indeterminate from '../../app/containers/Progress/Indeterminate';
import IndeterminateDoc from './doc/Indeterminate.md';
import PercentInside from '../../app/containers/Progress/PercentInside';
import PercentInsideDoc from './doc/PercentInside.md';
import PercentOutside from '../../app/containers/Progress/PercentOutside';
import PercentOutsideDoc from './doc/PercentOutside.md';
export default () =>
            storiesOf('Progress', module)
              .addDecorator(withReadme(ProgressDoc))
              .add('Circle', withDocs(CircleDoc, () => <h1>示例代码</h1>)).add('Indeterminate', withDocs(IndeterminateDoc, () => <h1>示例代码</h1>)).add('PercentInside', withDocs(PercentInsideDoc, () => <h1>示例代码</h1>)).add('PercentOutside', withDocs(PercentOutsideDoc, () => <h1>示例代码</h1>));