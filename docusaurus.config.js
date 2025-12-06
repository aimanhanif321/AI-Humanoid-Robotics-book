// @ts-check
// @type {import('@docusaurus/types').Config}
const config = {
  title: 'AI-Humanoid Robotics Book',
  tagline: 'Foundations and Advanced Concepts',
  url: 'https://aimanhanif321.github.io', // Replace with your actual URL
  baseUrl: '/AI-Humanoid-Robotics-Book/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  organizationName: 'aimanhanif321', // Replace with your GitHub org/user name
  projectName: 'AI-Humanoid-Robotics-Book', // Replace with your repository name

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/aimanhanif321/AI-Humanoid-Robotics-Book/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/aimanhanif321/AI-Humanoid-Robotics-Book/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'AI-Humanoid Robotics Book',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Book',
          },
          {
            to: '/docs/part1-foundations/chapter1-what-is-physical-ai',
            label: 'Foundations',
            position: 'left',
          },
          {
            to: '/docs/part2-ros2/chapter3-ros2-architecture',
            label: 'ROS2',
            position: 'left',
          },
          {
            to: '/docs/part3-digital-twin/chapter5-simulation-fundamentals',
            label: 'Digital Twin',
            position: 'left',
          },
          {
            to: '/docs/part4-isaac/chapter7-isaac-sim',
            label: 'Isaac',
            position: 'left',
          },
          {
            to: '/docs/part5-vla/chapter9-vla-systems-overview',
            label: 'VLA',
            position: 'left',
          },
          {
            to: '/docs/part6-hardware/chapter11-hardware-overview',
            label: 'Hardware',
            position: 'left',
          },
          {
            to: '/docs/part7-conclusion/chapter12-review-next-steps',
            label: 'Conclusion',
            position: 'left',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/aimanhanif321/AI-Humanoid-Robotics-Book', // Replace with your repo
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Book',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/aimanhanif321/AI-Humanoid-Robotics-Book',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: require('prism-react-renderer/themes/github'),
        darkTheme: require('prism-react-renderer/themes/dracula'),
      },
    }),
};

module.exports = config;