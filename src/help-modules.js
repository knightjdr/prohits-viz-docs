const helpModules = [
  {
    location: 'introduction/introduction',
    linkText: 'Help',
    route: '/help',
    title: 'Introduction',
  },
  {
    location: 'file-format/file-format',
    linkText: 'Input formats',
    route: '/help/format',
    title: 'Input formats',
  },
  {
    location: 'tools/tools',
    linkText: 'Tools',
    route: '/help/tools',
    panelText: 'Tools',
    children: [
      {
        component: 'tools/dotplot',
        linkText: 'Dot plot',
        route: '/help/tools/dotplot',
        title: 'Dot plot',
      },
    ],
  },
];

module.exports = helpModules;
