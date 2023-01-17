<template>
  <div class="app-container space-x-7" :class="theme">
    <button
        type="button"
        class="text-skin-base bg-skin-button-main p-3 rounded-sm"
        @click="toggleTheme"
    >
      Переключить тему
    </button>
    <LiteDatepicker />
  </div>
</template>


<script setup>
import {ref} from 'vue'

import LiteDatepicker from './components/LiteDatepicker.vue'

const theme = ref('theme-light')

const toggleTheme = () => (theme.value = theme.value === 'theme-light' ? 'theme-dark' : 'theme-light')
</script>
