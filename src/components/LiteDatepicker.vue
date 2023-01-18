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
import {dayjs} from "../utils.js"

const selectedDay = ref(18)

// составить полную дату
const dateToParse = {
  year: 2023,
  month: 1,
  selectedDay: selectedDay.value
}

const date = dayjs().set(dateToParse) // плагин позволяет передавать объект

// восстановить дату по выбранному дню месяца
const

debugger
</script>

<style>
input::placeholder {
  @apply text-gray-400;
  opacity: 1; /* Firefox */
}
</style>