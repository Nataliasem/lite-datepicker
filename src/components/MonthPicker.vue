<template>
  <div class="month-picker">
    <select name="month-select" :value="selectedMonth" @change="selectMonth($event.target.value)">
      <option v-for="month in monthList" :value="month.index">{{ month.name }}</option>
    </select>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import {monthList} from '../constants.js'

const props = defineProps({
  selectedMonth: Number
})

const emit = defineEmits(['update:selected-month'])

const selectedMonth = ref(props.selectedMonth)

const selectMonth = (month) => {
  selectedMonth.value = month
  emit('update:selected-month', selectedMonth)
}
</script>
