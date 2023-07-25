<template>
  <div class="year-picker">
    <label>
      <input
          type="text"
          :value="selectedYearLocal"
          @input="selectYear($event.target.value)"
      />
    </label>
  </div>
</template>

<script setup>
import {ref} from 'vue'

const props = defineProps({
  selectedYear: {
    type: Number,
    default: null
  }
})

const emit = defineEmits(['update:selectedYear'])

const selectedYearLocal = ref(props.selectedYear)

const selectYear = (year) => {
  const isCorrect = /^[0-9]{4}$/.test(year)

  if(!isCorrect) {
    return
  }

  selectedYearLocal.value = Number(year)
  emit('update:selectedYear', year)
}
</script>

<style scoped>

</style>