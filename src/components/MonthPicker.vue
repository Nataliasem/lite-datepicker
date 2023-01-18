<template>
  <div class="months-container">
    <div v-for="month in monthList">{{ month.name }}</div>
  </div>
</template>

<script setup>
const monthList = [
  { name: 'январь', index: 0 },
  { name: 'февраль', index: 1 },
  { name: 'март', index: 2 },
  { name: 'апрель', index: 3 },
  { name: 'май', index: 4 },
  { name: 'июнь', index: 5 },
  { name: 'июль', index: 6 },
  { name: 'август', index: 7 },
  { name: 'сентябрь', index: 8 },
  { name: 'октябрь', index: 9 },
  { name: 'ноябрь', index: 10 },
  { name: 'декабрь', index: 11 }
]
</script>

<style>
.months-container {
  @apply grid grid-cols-3;
}

</style>