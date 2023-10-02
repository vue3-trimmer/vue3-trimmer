<script setup lang="ts">
import { ref } from 'vue'
import { GridItem, GridLayout } from 'vue3-grid-layout-next'
import '../style/index.css'
import '../style/uno.css'

const layout = ref([
  { x: 0, y: 0, w: 2, h: 2, i: '0' },
  { x: 2, y: 0, w: 2, h: 4, i: '1' },
  { x: 2, y: 0, w: 2, h: 4, i: '2' },
])
</script>

<template>
  <div class="fixed bottom-0 inset-x-0 bg-zinc-50/5 border-t border-black">
    <GridLayout
      v-model:layout="layout"
      :col-num="12"
      :row-height="10"
      :is-draggable="true"
      :is-resizable="true"
      :is-mirrored="false"
      :vertical-compact="true"
      :margin="[10, 10]"
      :use-css-transforms="true"
    >
      <GridItem
        v-for="item in layout"
        :key="item.i"
        v-bind="{ ...item }"
        class="bg-zinc-200 rounded-md"
      >
        {{ item.i }}
      </GridItem>
    </GridLayout>
  </div>
</template>
