<script setup>
import {onMounted, onUnmounted, ref, watch} from 'vue'
import tippy from 'tippy.js'
import 'tippy.js/dist/tippy.css'

const props = defineProps({
  theme: String
})

let tippyInstance
const dropdownElement = ref(null)
const dropdownContent = ref(null)

const initTippy = () => {
  tippyInstance = tippy(dropdownElement.value, {
    content: dropdownContent.value,
    theme: props.theme,
    trigger: 'click',
    placement: 'top-start',
    arrow: false
  })

  tippyInstance && tippyInstance.show()
}

const destroyTippy = () => {
  tippyInstance && tippyInstance.destroy()
}

watch(() => props.theme, () => {
  initTippy()
})

onMounted(() => {
  initTippy()
})

onUnmounted(() => {
  destroyTippy()
})
</script>

<template>
  <div ref="dropdownElement">
    <slot name="attachTo" />
  </div>

  <div ref="dropdownContent">
    <slot />
  </div>
</template>

<style>
.tippy-box[data-theme~='light'] {
  @apply bg-white text-blue-800;
}

.tippy-box[data-theme~='dark'] {
  @apply bg-blue-800 text-white;
}
</style>
