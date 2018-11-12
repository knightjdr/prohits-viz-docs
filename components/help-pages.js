import Introduction from './introduction/introduction';
import FileFormat from './file-format/file-format';
import Recommendations from './recommendations/recommendations';
import Tools from './tools/tools';
import ToolsDotplot from './tools/dotplot';
import Visualization from './visualization/visualization';
import VisualizationFileFormat from './visualization/file-format';
import VisualizationHeatmap from './visualization/heatmap';
import VisualizationSave from './visualization/save/save';
import VisualizationSaveArchive from './visualization/save/archive';

const HelpPages = [
  {
    component: Introduction,
    linkText: 'Help',
    route: '/help',
    panelText: 'Introduction',
  },
  {
    component: FileFormat,
    linkText: 'Input formats',
    route: '/help/format',
    panelText: 'Input formats',
  },
  {
    component: Recommendations,
    linkText: 'Recommendations',
    route: '/help/recommendations',
    panelText: 'Recommendations',
  },
  {
    component: Tools,
    linkText: 'Tools',
    route: '/help/tools',
    panelText: 'Tools',
    children: [
      {
        component: ToolsDotplot,
        linkText: 'Dot plot',
        route: '/help/tools/dotplot',
        panelText: 'Dot plot',
      },
    ],
  },
  {
    component: Visualization,
    linkText: 'Visualization',
    route: '/help/visualization',
    panelText: 'Visualization',
    children: [
      {
        component: VisualizationFileFormat,
        linkText: 'File format',
        route: '/help/visualization/format',
        panelText: 'File format',
      },
      {
        component: VisualizationHeatmap,
        linkText: 'Heat map',
        route: '/help/visualization/heatmap',
        panelText: 'Heat map',
      },
      {
        component: VisualizationSave,
        linkText: 'Save',
        route: '/help/visualization/save',
        panelText: 'Save',
        children: [
          {
            component: VisualizationSaveArchive,
            linkText: 'Archive',
            route: '/help/visualization/save/archive',
            panelText: 'Archive',
          },
        ],
      },
    ],
  },
];

export default HelpPages;
