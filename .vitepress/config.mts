import { defineConfig } from 'vitepress'

const navItems = [
  {
    text: '💁 Wie zijn wij?',
    link: '/over',
  },
  {
    text: '📆 Evenementen',
    link: '/agenda',
  },
  {
    text: '✌️ Besluit mee',
    link: '/besluit-mee',
  },

  {
    text: '📚 Handleidingen',
    link: '/handleidingen',
  },

  // {
  //   text: '✌️ Besluit mee',
  //   items: [
  //     {
  //       text: '📆 Evenementen',
  //       link: '/agenda',
  //     },
  //     {
  //       text: '💬 Ga in WhatsApp groep',
  //       link: 'https://chat.whatsapp.com/Km6yyOdlPr5G2vcvmyfAKp',
  //     },
  //   ],
  // },
  // {
  //   text: 'Handleidingen',
  //   collapsed: true,
  //   items: [
  //     {
  //       text: '🎨 Huisstijl',
  //       link: '/huisstijl',
  //     },
  //   ],
  // },
]

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'nl-NL',
  title: 'Democratisch Verzet ✌️',
  description: 'Veerkracht. Vrijheid. Verbinding.',
  appearance: false,
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: navItems,

    // sidebar: navItems,

    socialLinks: [
      {
        icon: 'whatsapp',
        link: 'https://chat.whatsapp.com/Km6yyOdlPr5G2vcvmyfAKp',
      },
      {
        icon: 'substack',
        link: 'https://democratischverzet.substack.com/',
      },
      {
        icon: 'instagram',
        link: 'https://www.instagram.com/democratischverzet/',
      },
      {
        icon: 'facebook',
        link: 'https://www.facebook.com/democratischverzet/',
      },

      {
        icon: 'linkedin',
        link: 'https://www.linkedin.com/company/democratisch-verzet/',
      },

      { icon: 'youtube', link: 'https://www.youtube.com/@democratischverzet' },
    ],

    outline: false,
    aside: false,

    docFooter: {
      prev: 'Vorige pagina',
      next: 'Volgende pagina',
    },
  },
})
