<template>
  <div class="day-picker">
    <div class="week-day-wrapper">
      <div class="week-day" v-for="weekDay in WEEK_DAYS">{{ weekDay }}</div>
    </div>

    <div class="day-wrapper">
      <div
          v-for="day in daysInMonth"
          class="day"
          :id="'day-' + day"
          :class="setDayClass(day)"
          @click="selectDay(day)"
      >
        {{ day }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { WEEK_DAYS, VALID_DAYS_IN_MONTH_NUMBER } from '../constants.js'
import { dayToday } from '../utils.js'

const props = defineProps({
  selectedDay: {
    type: Number,
    default: null
  },
  daysInMonth: {
    type: Number,
    required: true,
    validator(value) {
      return VALID_DAYS_IN_MONTH_NUMBER.includes(value)
    }
  }
})

const emit = defineEmits(['update:selectedDay'])

const setDayClass = (day) => {
  return {
    selected: day === props.selectedDay,
    today: day === dayToday()
  }
}

const selectDay = (day) => {
  emit('update:selectedDay', day)
}
</script>

<style>
.day-wrapper,
.week-day-wrapper {
  @apply grid grid-cols-7 grid-rows-1 gap-2;
}

.week-day-wrapper .week-day {
  @apply py-1 px-2 text-gray-400;
  @apply flex justify-center items-center;
}

.day-wrapper .day {
  @apply text-lg;
  @apply px-2 py-1 flex justify-center items-center cursor-pointer;
  @apply border-b border-transparent rounded-sm;
}

.day-wrapper .day:first-child {
  grid-column-start: -7;
}

.day-wrapper .day:hover {
  @apply bg-skin-button-main-hover text-skin-inverted;
}

.day-wrapper .day.selected {
  @apply bg-skin-button-main-active text-skin-inverted;
}

.day-wrapper .day.today {
  @apply text-skin-accent;
}
</style>