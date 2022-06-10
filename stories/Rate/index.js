import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs, withReadme } from 'storybook-readme';
import RateDoc from '../../src/components/Rate/README.md';
import Basic from '../../app/containers/Rate/Basic';
import BasicDoc from './doc/Basic.md';
import Character from '../../app/containers/Rate/Character';
import CharacterDoc from './doc/Character.md';
import Disabled from '../../app/containers/Rate/Disabled';
import DisabledDoc from './doc/Disabled.md';
import Half from '../../app/containers/Rate/Half';
import HalfDoc from './doc/Half.md';
export default () =>
            storiesOf('Rate', module)
              .addDecorator(withReadme(RateDoc))
              .add('Basic', withDocs(BasicDoc, () => <h1>示例代码</h1>)).add('Character', withDocs(CharacterDoc, () => <h1>示例代码</h1>)).add('Disabled', withDocs(DisabledDoc, () => <h1>示例代码</h1>)).add('Half', withDocs(HalfDoc, () => <h1>示例代码</h1>));