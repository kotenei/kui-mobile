import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs, withReadme } from 'storybook-readme';
import CollapseDoc from '../../src/components/Collapse/README.md';
import Accordion from '../../app/containers/Collapse/Accordion';
import AccordionDoc from './doc/Accordion.md';
import Basic from '../../app/containers/Collapse/Basic';
import BasicDoc from './doc/Basic.md';
export default () =>
            storiesOf('Collapse', module)
              .addDecorator(withReadme(CollapseDoc))
              .add('Accordion', withDocs(AccordionDoc, () => <h1>示例代码</h1>)).add('Basic', withDocs(BasicDoc, () => <h1>示例代码</h1>));