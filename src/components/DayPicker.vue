<template>
  <div class="day-picker">
    <div class="week-day" v-for="weekDay in weekDays">{{ weekDay }}</div>
    <div
        class="day"
        :class="{'selected': checkIsSelected(day)}"
        v-for="day in daysInMonthNumber"
        @click="selectDay(day)"
    >
      {{ day }}
    </div>
  </div>
</template>

<script setup>
import {ref, computed} from 'vue'
import dayjs from 'dayjs'
import { weekDays} from '../constants.js'

const props = defineProps({
  selectedDay: Number,
  selectedDate: String
})

const emit = defineEmits(['update:selectedDay'])

const daysInMonthNumber = ref(null)

daysInMonthNumber.value = dayjs(props.selectedDate).daysInMonth()

const checkIsSelected = (day) => {
  return props.selectedDay === day
}

const selectDay = (day) => {
  emit('update:selectedDay', day)
}
</script>

<style>
.day-picker {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 4px;
  grid-row-gap: 4px;
}

.day-picker .week-day {
  @apply py-1 px-2 text-gray-400;
  @apply flex justify-center items-center;
}

.day-picker .day {
  @apply text-lg;
  @apply px-2 py-1 flex justify-center items-center cursor-pointer;
  @apply border-b border-transparent rounded-sm;
}

.day-picker .day:hover {
  @apply bg-skin-button-main-hover text-skin-inverted;
}

.day-picker .day.selected {
  @apply bg-skin-button-main-active text-skin-inverted;
}
</style>