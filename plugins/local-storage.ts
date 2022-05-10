import { acceptHMRUpdate, defineStore } from "pinia";


export default defineNuxtPlugin(() => {
    return {
      provide: {
        hello: () => 'world'
      }
    }
  })
  
  