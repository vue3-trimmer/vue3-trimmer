<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  width: {
    type: Number,
    required: true
  },
  second: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <div
    :style="{
      width: `${width}px`
    }"
    :class="` flex flex-row text-center text-gray-700 text-xs`"
  >
    <span class="border-r text-xs border-gray-500 font-light w-[25.6px] text-left h-2">
      {{ second }}
    </span>
    <span class="border-r text-xs border-gray-500 font-light w-[25.6px] h-2"> </span>
    <span class="border-r text-xs border-gray-500 font-light w-[25.6px] h-2"> </span>
    <span class="border-r text-xs border-gray-500 font-light w-[25.6px] h-2"> </span>
    <span class="border-r text-xs border-gray-300 font-light w-[25.6px] h-[2px]"> </span>
  </div>
</template>
