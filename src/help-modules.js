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
    location: 'recommendations/recommendations',
    linkText: 'Recommendations',
    route: '/help/recommendations',
    title: 'Recommendations',
  },
  {
    location: 'tools/tools',
    linkText: 'Tools',
    route: '/help/tools',
    title: 'Tools',
    children: [
      {
        location: 'tools/dotplot',
        linkText: 'Dot plot',
        route: '/help/tools/dotplot',
        title: 'Dot plot',
      },
    ],
  },
  {
    location: 'visualization/visualization',
    linkText: 'Visualization',
    route: '/help/visualization',
    title: 'Visualization',
    children: [
      {
        location: 'visualization/file-format',
        linkText: 'File format',
        route: '/help/visualization/format',
        title: 'File format',
      },
      {
        location: 'visualization/heatmap',
        linkText: 'Heat map',
        route: '/help/visualization/heatmap',
        title: 'Heat map',
      },
      {
        location: 'visualization/save/save',
        linkText: 'Save',
        route: '/help/visualization/save',
        title: 'Save',
        children: [
          {
            location: 'visualization/save/archive',
            linkText: 'Archive',
            route: '/help/visualization/save/archive',
            title: 'Archive',
          },
        ],
      },
    ],
  },
];

module.exports = helpModules;
