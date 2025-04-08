<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'

import posthog from 'posthog-js'

import { onMounted } from 'vue'

onMounted(() => {
  posthog.init('phc_hJNoZFxoTQWKuyXv1BY8F7wdXSnNG82RETWiacs9jlV',
    {
      ui_host: 'https://eu.posthog.com',
      api_host: 'https://a.democratischverzet.nl',
      person_profiles: 'identified_only' // or 'always' to create profiles for anonymous users as well
    }
  )
})

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <!-- <template #layout-top>
      My custom sidebar top content
    </template> -->
  </Layout>
</template>