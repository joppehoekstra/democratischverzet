import DefaultTheme from 'vitepress/theme'
import './styles.css'

import posthog from 'posthog-js'

posthog.init('phc_hJNoZFxoTQWKuyXv1BY8F7wdXSnNG82RETWiacs9jlV',
  {
    ui_host: 'https://eu.posthog.com',
    api_host: 'https:/a.democratischverzet.nl',
    person_profiles: 'identified_only' // or 'always' to create profiles for anonymous users as well
  }
)


export default DefaultTheme