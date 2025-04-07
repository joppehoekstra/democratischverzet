import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'nl-NL',
  title: 'Democratisch Verzet',
  description: 'Veerkracht. Vrijheid. Verbinding.',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // {
      //   text: 'WhatsApp groep',
      //   link: 'https://chat.whatsapp.com/Km6yyOdlPr5G2vcvmyfAKp',
      // },
    ],

    sidebar: [
      {
        text: 'Wie zijn wij?',
        items: [
          { text: 'Verklaring van verzet', link: '/verklaring' },
          { text: 'Groepsafspraken', link: '/groepsafspraken' },
          { text: 'Actieregels', link: '/actieregels' },
        ],
      },
      {
        text: 'Wat kan ik doen?',
        items: [
          {
            text: 'Evenementen',
            link: '/agenda',
          },
        ],
      },
    ],

    socialLinks: [
      {
        icon: 'whatsapp',
        link: 'https://chat.whatsapp.com/Km6yyOdlPr5G2vcvmyfAKp',
      },
    ],

    outline: false,
    aside: false,

    docFooter: {
      prev: 'Vorige pagina',
      next: 'Volgende pagina',
    },
  },
})
