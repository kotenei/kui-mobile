import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs, withReadme } from 'storybook-readme';
import SliderDoc from '../../src/components/Slider/README.md';
import Basic from '../../app/containers/Slider/Basic';
import BasicDoc from './doc/Basic.md';
import Color from '../../app/containers/Slider/Color';
import ColorDoc from './doc/Color.md';
import Disabled from '../../app/containers/Slider/Disabled';
import DisabledDoc from './doc/Disabled.md';
import Range from '../../app/containers/Slider/Range';
import RangeDoc from './doc/Range.md';
import Step from '../../app/containers/Slider/Step';
import StepDoc from './doc/Step.md';
import Vertical from '../../app/containers/Slider/Vertical';
import VerticalDoc from './doc/Vertical.md';
export default () =>
            storiesOf('Slider', module)
              .addDecorator(withReadme(SliderDoc))
              .add('Basic', withDocs(BasicDoc, () => <h1>示例代码</h1>)).add('Color', withDocs(ColorDoc, () => <h1>示例代码</h1>)).add('Disabled', withDocs(DisabledDoc, () => <h1>示例代码</h1>)).add('Range', withDocs(RangeDoc, () => <h1>示例代码</h1>)).add('Step', withDocs(StepDoc, () => <h1>示例代码</h1>)).add('Vertical', withDocs(VerticalDoc, () => <h1>示例代码</h1>));