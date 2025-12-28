import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'd10'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/ai',
    component: ComponentCreator('/blog/tags/ai', '2fa'),
    exact: true
  },
  {
    path: '/blog/tags/robotics',
    component: ComponentCreator('/blog/tags/robotics', 'c43'),
    exact: true
  },
  {
    path: '/blog/tags/welcome',
    component: ComponentCreator('/blog/tags/welcome', 'd09'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '6f2'),
    exact: true
  },
  {
    path: '/chatbot',
    component: ComponentCreator('/chatbot', '522'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '0f0'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'c3b'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'feb'),
            routes: [
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '89a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part1-foundations/chapter1-what-is-physical-ai',
                component: ComponentCreator('/docs/part1-foundations/chapter1-what-is-physical-ai', 'fd5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part1-foundations/chapter2-robotics-foundations',
                component: ComponentCreator('/docs/part1-foundations/chapter2-robotics-foundations', 'aa1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part2-ros2/chapter3-ros2-architecture',
                component: ComponentCreator('/docs/part2-ros2/chapter3-ros2-architecture', '11c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part2-ros2/chapter4-robot-models-urdf',
                component: ComponentCreator('/docs/part2-ros2/chapter4-robot-models-urdf', '4e8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part3-digital-twin/chapter5-simulation-fundamentals',
                component: ComponentCreator('/docs/part3-digital-twin/chapter5-simulation-fundamentals', 'bc9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part3-digital-twin/chapter6-building-interactive-environments',
                component: ComponentCreator('/docs/part3-digital-twin/chapter6-building-interactive-environments', '4f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part4-isaac/chapter7-isaac-sim',
                component: ComponentCreator('/docs/part4-isaac/chapter7-isaac-sim', '587'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part4-isaac/chapter8-isaac-ros-navigation',
                component: ComponentCreator('/docs/part4-isaac/chapter8-isaac-ros-navigation', '486'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part5-vla/chapter10-capstone-pipeline-overview',
                component: ComponentCreator('/docs/part5-vla/chapter10-capstone-pipeline-overview', '8e4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part5-vla/chapter9-vla-systems-overview',
                component: ComponentCreator('/docs/part5-vla/chapter9-vla-systems-overview', 'd6e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part6-hardware/chapter11-hardware-overview',
                component: ComponentCreator('/docs/part6-hardware/chapter11-hardware-overview', 'd23'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/part7-conclusion/chapter12-review-next-steps',
                component: ComponentCreator('/docs/part7-conclusion/chapter12-review-next-steps', 'd7f'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
