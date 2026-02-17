# 🚀 AstroWind

<img src="https://raw.githubusercontent.com/arthelokyo/.github/main/resources/astrowind/lighthouse-score.png" align="right"
     alt="AstroWind Lighthouse Score" width="100" height="358">

🌟 _Most *starred* & *forked* Astro theme in 2022, 2023 & 2024_. 🌟

**AstroWind** is a free and open-source template to make your website using **[Astro 5.0](https://astro.build/) + [Tailwind CSS](https://tailwindcss.com/)**. Ready to start a new project and designed taking into account web best practices.

- ✅ **Production-ready** scores in **PageSpeed Insights** reports.
- ✅ Integration with **Tailwind CSS** supporting **Dark mode** and **_RTL_**.
- ✅ **Fast and SEO friendly blog** with automatic **RSS feed**, **MDX** support, **Categories & Tags**, **Social Share**, ...

# Josue Garcia — Portfolio

Portafolio personal dedicado a enseñar mis proyectos (principalmente backend), mi stack y mis highlights.

Este README es solo documentación rápida para mí: un mapa de dónde editar cada cosa.

## Mapa rápido

- Home (secciones, anchors, botones, copy): `src/pages/index.astro`
  - Anchors del menú: `#home`, `#technologies`, `#projects`
- Hero (layout + avatar lateral): `src/components/widgets/Hero.astro`

## Proyectos

- Contenido (1 archivo = 1 proyecto): `src/data/post/`
- Listado completo: ruta `/blog` (en UI aparece como “All Projects”)
- UI de cards/tags/listados: `src/components/blog/`

## Imágenes

- Foto de perfil: `src/assets/images/profile.jpg`
- Imágenes de proyectos: `src/assets/images/projects/`
  - La imagen se referencia desde el frontmatter `image:` en cada `.md/.mdx`

## CV

- PDF del CV: `public/cv/`
- Link del botón “Download CV”: `src/pages/index.astro` (apunta a `/cv/...`)

## Navegación + footer

- Header y footer links: `src/navigation.ts`

## Config / SEO

- Config del sitio (nombre, metadata): `src/config.yaml`
- Astro config + icons whitelist: `astro.config.ts`

## Comandos (por si se me olvida)

- `npm run dev`
- `npm run build`

## Licencia

- `LICENSE.md`

#### Deploy to Netlify

Clone this repository on your own GitHub account and deploy it to Netlify:

[![Netlify Deploy button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/arthelokyo/astrowind)

#### Deploy to Vercel

Clone this repository on your own GitHub account and deploy to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Farthelokyo%2Fastrowind)

<br>

## Frequently Asked Questions

- Why?
-
-

<br>

## Related projects

- [TailNext](https://tailnext.vercel.app/) - Free template using Next.js 14 and Tailwind CSS with the new App Router.
- [Qwind](https://qwind.pages.dev/) - Free template to make your website using Qwik + Tailwind CSS.

## Contributing

If you have any ideas, suggestions or find any bugs, feel free to open a discussion, an issue or create a pull request.
That would be very useful for all of us and we would be happy to listen and take action.

## Acknowledgements

Initially created by **Arthelokyo** and maintained by a community of [contributors](https://github.com/arthelokyo/astrowind/graphs/contributors).

## License

**AstroWind** is licensed under the MIT license — see the [LICENSE](./LICENSE.md) file for details.
