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
        <month-picker v-model:selected-month="rawDate.month"/>
        <year-picker />
      </div>
      <day-picker
          v-model:selected-day="rawDate.day"
          :selected-date="selectedDate"
      />
    </div>
  </lite-dropdown>
</template>

<script setup>
import LiteDropdown from './LiteDropdown.vue'
import DayPicker from './DayPicker.vue'
import MonthPicker from './MonthPicker.vue'
import YearPicker from './YearPicker.vue'
import {ref, computed} from 'vue'
import {dayjs} from '../utils.js'

const defaultMonth = dayjs().month()
const defaultYear = dayjs().year()

const rawDate = ref({
  year: defaultYear, // текущий год по умолчанию
  month: defaultMonth, // текущий месяц по умолчанию
  day: null
})

const selectedDate = computed(() => {
  return rawDate.value.day ? dayjs(rawDate.value).format() : dayjs().format()
})
</script>

<style>
input::placeholder {
  @apply text-gray-400;
  opacity: 1; /* Firefox */
}
</style>