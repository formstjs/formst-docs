/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

module.exports = {
  title: 'Formst',
  tagline: 'A JS library for quickly building high performance forms in React.',
  url: 'https://formstjs.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo-formst.png',
  organizationName: 'formstjs', // Usually your GitHub org/user name.
  projectName: 'formstjs.github.io', // Usually your repo name.
  themeConfig: {
    sidebarCollapsible: false,
    // algolia: {
    // apiKey: '74e045c9f1e92488f848f0834b497d62',
    // indexName: 'formst',
    // Optional: see doc section bellow
    // contextualSearch: true,
    // Optional: Algolia search parameters
    // searchParameters: {},
    // algoliaOptions: {facetFilters: ['type:content', 'language:en']}, // Optional, if provided by Algolia,
    // debug: false,
    // placeholder: 'Search Docs',
    // },
    navbar: {
      // title: 'Formst',
      logo: {
        alt: 'Formst Logo',
        src: 'img/Logo-Light.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'right',
        },
        // {to: 'blog', label: 'Blog', position: 'left'},
        // Please keep GitHub link to the right for consistency.
        {
          href: 'https://market.nativebase.io/',
          label: 'Market',
          position: 'right',
        },
        {
          href: 'https://geekyants.com/hire',
          label: 'Hire us',
          position: 'right',
        },
        {
          href: 'https://github.com/formstjs/formst',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            // {
            //   label: 'Second Doc',
            //   to: 'docs/doc2',
            // },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/formst',
            },
          ],
        },
        {
          title: 'More',
          items: [
            // {
            //   label: 'Blog',
            //   to: 'blog',
            // },
            {
              label: 'GitHub',
              href: 'https://github.com/formstjs/formst',
            },
          ],
        },
        {
          title: 'Legal',
          // Please do not remove the privacy and terms, it's a legal requirement.
          items: [
            {
              label: 'Privacy',
              href: 'https://opensource.facebook.com/legal/privacy/',
            },
            {
              label: 'Terms',
              href: 'https://opensource.facebook.com/legal/terms/',
            },
          ],
        },
      ],
      logo: {
        alt: 'Facebook Open Source Logo',
        src: 'img/oss_logo.png',
        href: 'https://opensource.facebook.com',
      },
      // Please do not remove the credits, help to publicize Docusaurus :)
      copyright: `Copyright © ${new Date().getFullYear()} GeekyAnts. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/formstjs/formst-docs',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/formstjs/formst-docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
