<template>
  <button type="button" class="bg-white mr-5 p-1" @click="toggleTheme">Сменить тему</button>

  <lite-dropdown :theme="theme">
    <template #attachTo>
      <input v-model="selectedDay" type="text" placeholder="Выберите дату">
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
.picker-wrapper {
}
</style>