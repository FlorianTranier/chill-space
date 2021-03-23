import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faWindowRestore, faCog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import InputColorPicker from 'vue-native-color-picker'

library.add(faWindowRestore, faCog)

createApp(App).use(InputColorPicker).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
