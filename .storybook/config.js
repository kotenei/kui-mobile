import { configure, addParameters, addDecorator } from '@storybook/react';
import { addReadme, configureReadme } from 'storybook-readme';

const req = require.context('../stories', true, /.stories.js$/);

function loadStories() {
  req
    .keys()
    .sort()
    .forEach(filename => req(filename));
}

// configureReadme({
//   StoryPreview: StoryWrapper,
//   DocPreview: DocWrapper,
//   HeaderPreview: HeaderWrapper,
//   FooterPreview: FooterWrapper
// });

addParameters({
  options: {
    name: 'kui-mobile',
    goFullScreen: false,
    showAddonsPanel: true,
    showSearchBox: true,
    addonPanelInRight: true,
    sortStoriesByKind: true,
    hierarchySeparator: /\./,
    hierarchyRootSeparator: /\|/,
    enableShortcuts: true,
  },
  readme: {
    codeTheme: 'hopscotch',
  },
});

addDecorator(addReadme);

configure(loadStories, module);
