<script setup lang="ts">
import { ref } from 'vue'
import draggable from 'vuedraggable'
import pic1 from '@/lib/frame.png'
import pic2 from '@/lib/frame2.jpg'

import Frame from '@/lib/VFrame.vue'
import Second from '@/lib/VSecond.vue'

const drag = ref(false)
const settings = {
  maxWidth: 640,
  totalDuration: 5
}

const list = ref([])
</script>

<template>
  <div class="m-10 max-w-max">
    <div
      style="{
      width: `${settings.maxWidth}px`
    }"
      class="flex flex-row border h-[20px]"
    >
      <Second
        v-for="i in settings.totalDuration"
        :key="settings.totalDuration + i"
        :width="settings.maxWidth / settings.totalDuration"
        :second="i"
      />
    </div>
    <div
      :style="{
        width: `${settings.maxWidth}px`
      }"
      class="flex h-[180px] overflow-scroll border-b border-l border-r border-gray-300"
    >
      <div class="relative">
        <div
          v-for="i in settings.totalDuration * 5"
          :data-index="i"
          :key="settings.totalDuration + i"
          :style="{
            left: `${(i - 1) * (settings.maxWidth / settings.totalDuration / 5)}px`,
            width: `${settings.maxWidth / settings.totalDuration / 5}px`
          }"
          class="top-0 absolute h-full border-r border-gray-200 -z-10"
        />
      </div>
      <draggable
        @start="drag = true"
        @end="drag = false"
        v-model="list"
        item-key="id"
        handle=".drag-handle"
        class="flex flex-row"
      >
        <template #item="{ element }">
          <Frame
            :total-duration="settings.totalDuration"
            :max-width="settings.maxWidth"
            :key="element.id"
            :frame="element.frame"
            :duration="element.duration"
          />
        </template>
      </draggable>
    </div>
  </div>
</template>
