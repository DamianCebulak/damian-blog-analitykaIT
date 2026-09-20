import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://astro-paper.pages.dev/",
    title: "Damian Cebulak | Tech Lead & IT Analyst",
    description: "Insights on core banking transformations, enterprise architecture, and systems thinking by Damian Cebulak.",
    author: "Damian Cebulak",
    profile: "https://github.com/DamianCebulak",
    ogImage: "default-og.jpg",
    lang: "pl",
    timezone: "Europe/Warsaw",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: false,
      url: "https://damian-blog-analityka-it.vercel.app/",
    },
    search: "pagefind",
  },
  socials: [
    { name: "github",   url: "https://github.com/DamianCebulak" },
    { name: "linkedin", url: "https://www.linkedin.com/in/damian-cebulak/" },
    { name: "mail",     url: "mailto:contact@damiancebulak.pl" },
  ],
shareLinks: [
    { name: "linkedin", url: "https://www.linkedin.com/sharing/share-offsite/?url=" },
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
