<template>
  <div class="year-picker">
    <select name="year-select">
      <option v-for="year in years">{{ year }}</option>
    </select>
  </div>
</template>

<script setup>
import {ref} from 'vue'
const years = ref(['2022', '2023'])
</script>

<style scoped>

</style>