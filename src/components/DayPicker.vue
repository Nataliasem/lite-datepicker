<script setup>
const weekDays = [
    'пн',
    'вт',
    'ср',
    'чт',
    'пт',
    'сб',
    'вс',
]
</script>

<template>
  <div class="days-container">
    <div class="p-1" v-for="weekDay in weekDays">{{ weekDay }}</div>
    <div class="p-1" v-for="day in 31">{{ day }}</div>
  </div>
</template>


<style>
.days-container {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 4px;
  grid-row-gap: 4px;
}
</style>