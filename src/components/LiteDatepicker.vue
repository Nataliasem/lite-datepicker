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
</script>

<template>
  <button type="button" class="bg-white mr-5 p-1" @click="toggleTheme">Сменить тему</button>

  <lite-dropdown :theme="theme">
    <template #attachTo>
      <input type="text" placeholder="Выберите дату">
    </template>

    <div class="picker-wrapper theme-light">
      <day-picker />
      <month-picker />
      <year-picker />
    </div>
  </lite-dropdown>
</template>

<style>
.picker-wrapper {
}
</style>