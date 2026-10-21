import { getBlogPermalink } from './utils/permalinks';

type Lang = 'en' | 'es';

const linkedin = 'https://www.linkedin.com/in/josu%C3%A9-garc%C3%ADa-07ab94297/';
const email = 'josuegarcab2@gmail.com';

export const getHeaderData = (lang: Lang = 'en') => {
  const es = lang === 'es';
  const base = es ? '/es' : '/';
  return {
    links: [
      { text: es ? 'Inicio' : 'Home', href: `${base}#home` },
      { text: es ? 'Experiencia' : 'Experience', href: `${base}#experience` },
      { text: es ? 'Proyectos' : 'Projects', href: `${base}#projects` },
      { text: es ? 'Tecnologías' : 'Skills', href: `${base}#skills` },
      { text: es ? 'Sobre mí' : 'About', href: `${base}#about` },
      { text: es ? 'Contacto' : 'Contact', href: `${base}#contact` },
      { text: es ? 'Todos los proyectos' : 'All Projects', href: getBlogPermalink() },
    ],
    actions: [{ text: es ? 'EN' : 'ES', href: es ? '/' : '/es', icon: 'tabler:language' }],
  };
};

export const headerData = getHeaderData('en');

export const getFooterData = (lang: Lang = 'en') => {
  const es = lang === 'es';
  return {
    links: [
      {
        title: es ? 'Contacto' : 'Contact',
        links: [{ text: email, href: `mailto:${email}`, ariaLabel: 'Email' }],
      },
      {
        title: es ? 'Enlaces' : 'Links',
        links: [
          { text: 'GitHub', href: 'https://github.com/JosueGarciaAbata' },
          { text: 'LinkedIn', href: linkedin },
          { text: 'YouTube', href: 'https://www.youtube.com/@user-jsg204' },
        ],
      },
    ],
    secondaryLinks: [],
    socialLinks: [
      { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/JosueGarciaAbata' },
      { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: linkedin },
      { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/@user-jsg204' },
      { ariaLabel: 'Email', icon: 'tabler:mail', href: `mailto:${email}` },
    ],
    footNote: `© ${new Date().getFullYear()} Josue Garcia. ${es ? 'Todos los derechos reservados.' : 'All rights reserved.'}`,
  };
};

export const footerData = getFooterData('en');
