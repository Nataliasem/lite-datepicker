<template>
  <div class="days-container">
    <div class="week-day" v-for="weekDay in weekDays">{{ weekDay }}</div>
    <div
        class="day"
        :class="{'selected': checkIsSelected(day)}"
        v-for="day in 31"
        @click="selectDay(day)"
    >
      {{ day }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  selectedDay: Number
})

const emit = defineEmits(['update:selectedDay'])

const weekDays = [
    'пн',
    'вт',
    'ср',
    'чт',
    'пт',
    'сб',
    'вс',
]

const checkIsSelected = (day) => {
  return props.selectedDay === day
}

const selectDay = (day) => {
  emit('update:selectedDay', day)
}
</script>

<style>
.days-container {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 4px;
  grid-row-gap: 4px;
}

.week-day {
  @apply py-1 px-2 text-gray-400;
  @apply flex justify-center items-center;
}

.days-container .day {
  @apply text-lg;
  @apply px-2 py-1 flex justify-center items-center cursor-pointer;
  @apply border-b border-transparent rounded-sm;
}

.days-container .day:hover {
  @apply bg-skin-button-main-hover text-skin-inverted;
}

.days-container .day.selected {
  @apply bg-skin-button-main-active text-skin-inverted;
}
</style>