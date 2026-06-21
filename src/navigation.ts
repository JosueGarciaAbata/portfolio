import { getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/#home',
    },
    {
      text: 'Projects',
      href: '/#projects',
    },
    {
      text: 'Skills',
      href: '/#skills',
    },
    {
      text: 'About',
      href: '/#about',
    },
    {
      text: 'Contact',
      href: '/#contact',
    },
    {
      text: 'All Projects',
      href: getBlogPermalink(),
    },
  ],
  actions: [],
};

export const footerData = {
  links: [
    {
      title: 'Contact',
      links: [{ text: 'josuegarcab2@hotmail.com', href: 'mailto:josuegarcab2@hotmail.com', ariaLabel: 'Email' }],
    },
    {
      title: 'Links',
      links: [
        { text: 'GitHub', href: 'https://github.com/JosueGarciaAbata' },
        { text: 'LinkedIn', href: 'https://www.linkedin.com/in/josue-joel-garcia-abata-07ab94297/' },
        { text: 'YouTube', href: 'https://www.youtube.com/@user-jsg204' },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/JosueGarciaAbata' },
    {
      ariaLabel: 'LinkedIn',
      icon: 'tabler:brand-linkedin',
      href: 'https://www.linkedin.com/in/josue-joel-garcia-abata-07ab94297/',
    },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/@user-jsg204' },
    { ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:josuegarcab2@hotmail.com' },
  ],
  footNote: `© ${new Date().getFullYear()} Josue Garcia. All rights reserved.`,
};
