<template>
  <lite-dropdown>
    <template #attachTo>
      <input
          class="p-3 rounded-sm border-2 rounded-sm border-skin-input-border"
          type="text"
          placeholder="Выберите дату"
      >
    </template>

    <div class="picker-wrapper p-3">
      <div class="flex items-center justify-center space-x-5">
        <month-picker v-model:selectedMonth="rawDate.month" />
        <year-picker v-model:selectedYear="rawDate.year" />
      </div>
      <day-picker
          v-model:selectedDay="rawDate.day"
          :selected-date="selectedDate"
          :days-in-month="daysInMonth"
      />
      </div>
  </lite-dropdown>
</template>

<script setup>
import LiteDropdown from './LiteDropdown.vue'
import DayPicker from './DayPicker.vue'
import MonthPicker from './MonthPicker.vue'
import YearPicker from './YearPicker.vue'
import { ref, computed } from 'vue'
import { daysInMonthNumber, fullDate, fullDateToday, monthToday, yearToday } from '../utils.js'

const rawDate = ref({
  year: yearToday(),
  month: monthToday(),
  day: null
})

const selectedDate = computed(() => {
  return rawDate.value.day ? fullDate(rawDate.value) : fullDateToday()
})

const daysInMonth = computed(() => {
  return daysInMonthNumber(selectedDate.value)
})
</script>

<style>
input::placeholder {
  @apply text-gray-400;
  opacity: 1; /* Firefox */
}
</style>