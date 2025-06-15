import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'doc',
      id: 'home',
      label: 'Home',
    },
    {
      type: 'doc',
      id: 'overview',
      label: 'Overview',
    },
    {
      type: 'category',
      label: 'Academic',
      collapsed: true,
      items: [
        'academic-research/index',
        'academic-research/max-planck',
        'academic-research/platform-costs',
    
      ],
    },
    {
      type: 'category',
      label: 'Oncology',
      collapsed: true,
      items: [
        'oncology-europe/index',
        'oncology-europe/incidence-cost-scenarios',
        'oncology-europe/germany-hospitals',
      ],
    },
    {
      type: 'category',
      label: 'Graph Database',
      collapsed: true,
      items: [
        'graph-database/index',
        'graph-database/query-examples',
      ],
    },
    {
      type: 'category',
      label: 'Onco Database',
      collapsed: true,
      items: [
        'mimic-onco/index',
      ],
    },
  ],
};

export default sidebars;
