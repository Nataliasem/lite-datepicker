<template>
  <lite-dropdown>
    <template #attachTo>
      <input
          v-model="selectedDay"
          class="p-3 rounded-sm border-2 rounded-sm border-skin-input-border"
          type="text"
          placeholder="Выберите дату">
    </template>

    <div class="picker-wrapper p-3">
      <day-picker v-model:selectedDay="selectedDay" />
      <month-picker />
      <year-picker />
    </div>
  </lite-dropdown>
</template>

<script setup>
import LiteDropdown from './LiteDropdown.vue'
import DayPicker from './DayPicker.vue'
import MonthPicker from './MonthPicker.vue'
import YearPicker from './YearPicker.vue'
import {ref} from 'vue'

const theme = ref('light')
const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}

const selectedDay = ref(null)
</script>

<style>
input::placeholder {
  @apply text-gray-400;
  opacity: 1; /* Firefox */
}
</style>