<script setup>
import LiteDropdown from './LiteDropdown.vue'
import DayPicker from './DayPicker.vue'
import MonthPicker from './MonthPicker.vue'
import YearPicker from './YearPicker.vue'
</script>

<template>
  <lite-dropdown>
    <template #attachTo>
      <input type="text" placeholder="Выберите дату">
    </template>

    <div class="picker-wrapper">
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