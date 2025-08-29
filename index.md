---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 'Democratisch Verzet'
  tagline: De Nederlandse democratie is kapot. Het is tijd dat we weer met elkaar in gesprek gaan. Doe je mee?
  image:
    src: /logo.png
    alt: 'Democratisch Verzet'
  actions:
    - theme: brand
      text: 💁 Wie zijn wij?
      link: /over
    - theme: alt
      text: 💬 Ga in WhatsApp groep
      link: https://chat.whatsapp.com/Km6yyOdlPr5G2vcvmyfAKp

features:
  - title: '1️⃣ Onze democratie is kapot'
    details: De politiek luistert niet naar ons en Nederland zit op slot.
  - title: '2️⃣ Wij gaan weer naar elkaar luisteren'
    details: We willen gehoord worden, dus gaan we met elkaar in gesprek.
  - title: '3️⃣ Nederland is van ons allemaal'
    details: Het is niet ok dat een klein groepje mensen de macht heeft.
---

<script setup>
import { onMounted } from 'vue'
import { VPTeamMembers } from 'vitepress/theme'

onMounted(() => {
var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}
})


const members = [
  {
    avatar: '/img/joppe.jpeg',
    name: 'Joppe',
    title: 'Online marketeer',
    desc: '"De hele wereld staat in de fik. Dat komt door de elite die zichzelf aan het verrijken is. Ik wil daar iets aan doen, maar voel me vaak machteloos. Democratisch Verzet is een plek waar ik kan bijdragen aan échte verandering."',
  },
  {
    avatar: '/img/danielle.jpg',
    name: 'Danielle',
    title: 'Beeldend kunstenaar',
    desc: '"Ik ben eigenlijk helemaal geen activist. Ik vind het belangrijk dat we weer met elkaar in gesprek gaan. Hier kan ik bijdragen aan die verbinding. Mensen en organisaties bij elkaar brengen, dat is wat ik het liefste doe."',
  },
]

// Randomize the order of team members
members.sort(() => Math.random() - 0.5)
</script>

# Blijf op de hoogte

Meld je aan om op de hoogte te blijven van het Democratisch Verzet.

<iframe data-tally-src="https://tally.so/embed/mZQjrB?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%" height="351" frameborder="0" marginheight="0" marginwidth="0" title="Onze democratie is kapot. Wat nu?"></iframe>

# Onze democratie is kapot. Wat nu?

Onze democratie is kapot. De politiek luistert niet naar ons en Nederland zit op slot. Grote problemen worden niet opgelost. Mensen zijn meer gepolariseerd dan ooit. Multinationals en miljardairs hebben het voor het zeggen. Wij hebben genoeg van een politiek die besluiten maakt in achterkamertjes, en dineert met lobbyisten.

Wij gaan weer naar elkaar luisteren. We willen gehoord worden, dus gaan we met elkaar in gesprek. We gaan weer leren samenwerken. Samen bepalen we hoe we Nederland mooier gaan maken.

Nederland is van ons allemaal. Het is niet ok dat een klein groepje mensen de macht heeft. We gaan zo veel mogelijk verschillende mensen bij elkaar brengen. We laten ons niet tegen elkaar uitspelen. Want samen staan we sterker. We doen wat nodig is om échte verandering af te dwingen. Dat doen we met creatieve, ludieke, innovatieve en geweldloze acties.

**Als eerste stap gaan we door heel Nederland gesprekken organiseren. En we gaan creatieve en ludieke acties doen om aandacht te krijgen. Doe jij mee?**

<VPTeamMembers size="small" :members />

# Sluit je aan bij onze beweging

Wil jij ook onderdeel zijn van de oplossing? Meld je aan, dan vertellen we je wat meer ove onze plannen!

<iframe data-tally-src="https://tally.so/embed/mZQjrB?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%" height="351" frameborder="0" marginheight="0" marginwidth="0" title="Onze democratie is kapot. Wat nu?"></iframe>
