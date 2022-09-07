// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PengFei',
  tagline: '知识库',
  url: 'https://pengfei-cn.github.io',
  baseUrl: '/blogs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'PENGFEI-CN', // Usually your GitHub org/user name.
  projectName: 'blogs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh'],
  },

  presets: [
    // [
    //   'classic',
    //   /** @type {import('@docusaurus/preset-classic').Options} */
    //   ({
    //     // docs: {
    //     //   sidebarPath: require.resolve('./sidebars.js'),
    //     //   // Please change this to your repo.
    //     //   // Remove this to remove the "edit this page" links.
    //     //   editUrl:
    //     //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
    //     // },
    //     blog: {
    //       showReadingTime: true,
    //       // Please change this to your repo.
    //       // Remove this to remove the "edit this page" links.
    //       // editUrl:
    //       //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
    //     },
    //     theme: {
    //       customCss: require.resolve('./src/css/custom.css'),
    //     },
    //   }),
    // ],
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          include: ['**/*.md', '**/*.mdx'],
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
          ],
          sidebarPath: 'sidebars.js',
          // routeBasePath: '/', // 把文档放在网站根部
          /* 其他文档插件配置 */
        },
        blog: {
          path: 'blog',
          // 一般使用场景：字符串 editUrl
          // editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
          // 高级使用场景：函数 editUrl
          // editUrl: ({locale, blogDirPath, blogPath, permalink}) =>
          //     `https://github.com/facebook/docusaurus/edit/main/website/${blogDirPath}/${blogPath}`,
          editLocalizedFiles: false,
          blogTitle: 'Front-end Blogs',
          blogDescription: 'Front-end JS CSS HTML',
          blogSidebarCount: 10,
          blogSidebarTitle: 'PF Blogs',
          routeBasePath: 'blog',
          include: ['**/*.{md,mdx}'],
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
          ],
          postsPerPage: 10,
          blogListComponent: '@theme/BlogListPage',
          blogPostComponent: '@theme/BlogPostPage',
          blogTagsListComponent: '@theme/BlogTagsListPage',
          blogTagsPostsComponent: '@theme/BlogTagsPostsPage',
          remarkPlugins: [],
          rehypePlugins: [],
          beforeDefaultRemarkPlugins: [],
          beforeDefaultRehypePlugins: [],
          truncateMarker: /<!--\s*(truncate)\s*-->/,
          showReadingTime: true,
          feedOptions: {
            type: 'rss',
            title: '',
            description: '',
            copyright: '',
            language: undefined,
          },
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'PengFei Blogs',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '文档',
          },
          {to: '/blog', label: '博客', position: 'left'},
          {
            label: 'GitHub',
            href: 'https://github.com/PENGFEI-CN',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Tutorial',
          //       to: '/docs/intro',
          //     },
          //   ],
          // },
          {
            title: 'Community',
            items: [
              {
                href: 'https://gitee.com/pengfei19981209/blogs',
                label: 'Gitee',
                position: 'right',
              },
              // {
              //   label: 'Stack Overflow',
              //   href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              // },
              // {
              //   label: 'Discord',
              //   href: 'https://discordapp.com/invite/docusaurus',
              // },
              // {
              //   label: 'Twitter',
              //   href: 'https://twitter.com/docusaurus',
              // },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },  {
                label: 'Docs',
                to: '/docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
    }),
};

module.exports = config;
