<template>
  <div ref="dropdownElement">
    <slot name="attachTo" />
  </div>

  <div ref="dropdownContent">
    <slot />
  </div>
</template>

<script setup>
import {onMounted, onUnmounted, ref, watch} from 'vue'
import tippy from 'tippy.js'
import 'tippy.js/dist/tippy.css'

let tippyInstance
const dropdownElement = ref(null)
const dropdownContent = ref(null)

const initTippy = () => {
  tippyInstance = tippy(dropdownElement.value, {
    content: dropdownContent.value,
    theme: 'lite-dropdown',
    trigger: 'click',
    placement: 'top-start',
    arrow: false,
    interactive: true,
    hideOnClick: false
  })

  tippyInstance && tippyInstance.show()
}

const destroyTippy = () => {
  tippyInstance && tippyInstance.destroy()
}

onMounted(() => {
  initTippy()
})

onUnmounted(() => {
  destroyTippy()
})
</script>

<style>
.tippy-box[data-theme~='lite-dropdown'] {
  @apply bg-skin-fill text-skin-base;
}
</style>
