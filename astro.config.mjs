import { defineConfig } from "astro/config";
import { astroExpressiveCode } from "@astrojs/starlight/expressive-code";
import mdx from "@astrojs/mdx";
import starlight from "@astrojs/starlight";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import { remarkModifiedTime } from "./remark-modified-time.mjs";

// https://astro.build/config
export default defineConfig({
    site: "https://comida2xmarca.vercel.app",
    markdown: {
      remarkPlugins: [remarkModifiedTime],
      include: ["src/content/docs/**/*.mdx","src/**/*.mdx"],
    },
    integrations: [
        astroExpressiveCode(),
        mdx( {
          remarkPlugins: [remarkModifiedTime],
          include: ["src/content/docs/**/*.mdx","src/**/*.mdx"],
      } ),
        starlight({
            title: "A marca Comida-Comida.",
            defaultLocale: "pt-BR",
            locales: {
                root: {
                    label: "Português do Brasil",
                    dir: "ltr",
                    lang: "pt-BR",
                },
            },
            lastUpdated: true,
            social: {
                github: "https://github.com/aledebarba",
                twitter: "https://twitter.com/alemacedo",
            },
            sidebar: [
                {
                    label: "Documentação de implementação da marca",
                    items: [
                        // Each item here is one entry in the navigation menu.
                        {
                            label: "Conteúdo",
                            link: "/brand/content/",
                        },
                        {
                            label: "Briefing",
                            link: "/brand/briefing/",
                        },
                        {
                            label: "Contexto e Moodboard",
                            link: "/brand/idv/",
                        },
                        {
                            label: "Logotipo e outros elementos de comunicação visual",
                            link: "/brand/brand/",
                        },
                        {
                            label: "Manual de uso",
                            link: "/brand/design-guide/",
                        },
                        {
                            label: "Aplicação de Cor",
                            link: "/brand/design-guide-paleta/",
                        },
                        {
                            label: "Personagens",
                            link: "/brand/design-guide-mascotes/",
                        },
                        {
                            label: "Mockups",
                            link: "/brand/design-guide-aplicacoes/",
                        },
                        {
                            label: "Material de Impressão",
                            link: "/brand/print/",
                        },
                        {
                            label: "Redes Sociais",
                            link: "/brand/social/",
                        },
                        {
                            label: "Design Kit",
                            link: "/brand/design-kit/",
                        },
                        {
                            label: "Press Kit",
                            link: "/brand/press-kit/",
                        },
                        {
                            label: "Sobre",
                            link: "/brand/about/",
                        },
                    ],
                },
                {
                    label: "Referências:",
                    autogenerate: {
                        directory: "reference",
                    },
                },
            ],
            customCss: [
                // Caminho relativo ao seu arquivo CSS customizado
                "./src/styles/custom.css",
            ],
        }),
        react({
            include: ["**/react/*"],
        }),
        sitemap(),
    ],
});
