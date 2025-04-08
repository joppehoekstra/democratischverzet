import { defineConfig } from 'vitepress'

const navItems = [
  {
    text: 'Wie zijn wij?',
    items: [
      { text: '✌️ Verklaring van verzet', link: '/verklaring' },
      { text: '❤️ Groepsafspraken', link: '/groepsafspraken' },
      { text: '📢 Actieregels', link: '/actieregels' },
      { text: '💬 Wat is een besluitgesprek?', link: '/besluitgesprek' },
    ],
  },
  {
    text: 'Wat kan ik doen?',
    items: [
      {
        text: '📆 Evenementen',
        link: '/agenda',
      },
      {
        text: '💬 Ga in WhatsApp groep',
        link: 'https://chat.whatsapp.com/Km6yyOdlPr5G2vcvmyfAKp',
      },
    ],
  },
  {
    text: 'Handleidingen',
    collapsed: true,
    items: [
      {
        text: '🎨 Huisstijl',
        link: '/huisstijl',
      },
    ],
  },
]

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'nl-NL',
  title: 'Democratisch Verzet',
  description: 'Veerkracht. Vrijheid. Verbinding.',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: navItems,

    // sidebar: navItems,

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
