<script setup lang="ts">
import { computed, defineProps, ref } from 'vue'
import { useMouseInElement } from '@vueuse/core'
import Grabber from './VGrabber.vue'
import { resize } from './directives'

const props = defineProps({
  frame: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  totalDuration: {
    type: Number,
    required: true,
  },
  maxWidth: {
    type: Number,
    required: true,
  },
})

const target = ref(null)

const { isOutside } = useMouseInElement(target)

const backgroundImage = computed(() => `url(${props.frame})`)

const vResize = {
  mounted(el: HTMLDivElement & { parentElement?: HTMLDivElement }) {
    resize(el)
  },
}
</script>

<template>
  <div
    v-resize
    :style="{
      minWidth: `${(props.maxWidth / props.totalDuration) * props.duration}px`,
    }"
    class="hero bg-opacity-0 transition-colors cursor-pointer relative flex justify-center items-center border-solid border-2 rounded-xl border-black border-opacity-5 overflow-hidden hover:border-primary-400 hover:border-opacity-50 hover:bg-primary-050 active:border-primary-400 focus:outline-none focus:ring focus:border-primary-400"
  >
    <div
      class="h-full w-full flex flex-row text-gray-400 text-center justify-center items-center space-y-2"
    >
      <div class="transform rotate-90 absolute -left-8 flex items-center">
        <Grabber />
      </div>
      <div
        ref="target"
        :class="!isOutside ? 'drag-handle' : ''"
        class="flex min-w-[120px] h-full justify-center items-center flex-row"
      >
        <img draggable="false" :src="frame" alt="frame1" class="w-[40px] h-[40px]">
      </div>
      <div class="transform rotate-90 absolute -right-8 flex items-center">
        <Grabber />
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero::before {
  content: '';
  background-image: v-bind(backgroundImage);
  background-size: cover;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  z-index: -1;
  opacity: 0.4;
}

:global(.grabber) {
  position: absolute;
  box-sizing: border-box;
}

:global(.grabber.right) {
  width: 20px;
  height: 100%;
  right: 0px;
  cursor: e-resize;
  z-index: 10;
}

:global(.grabber.left) {
  width: 20px;
  height: 100%;
  left: 0px;
  cursor: w-resize;
  z-index: 10;
}

:global(.hide-grabber .grabber) {
  background: transparent !important;
  border: none !important;
}
</style>
