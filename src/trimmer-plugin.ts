import type { Plugin } from 'vue'
import Trimmer from "./lib/index.vue"

export function plugin(): Plugin {
    return {
      install: (app) => {
        app.component('Vue3Trimmer', Trimmer)
      },
    }
  }
  
  
export { default as Vue3Trimmer } from "./lib/index.vue"