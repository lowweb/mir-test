<script setup>
import InlineSvg from 'vue-inline-svg'
const props = defineProps({
  isshow: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <TransitionGroup name="list">
    <div class="tooltip" v-if="isshow">
      <button @click.stop="$emit('closeTooltip')" class="tooltip__closeButton">
        <inline-svg src="../../src/assets/icn/icn-close.svg" />
      </button>
      <span class="tooltip__title">
        <slot name="tooltipTitle" />
      </span>
      <span class="tooltip__body">
        <slot name="tooltipBody" />
      </span>
    </div>
  </TransitionGroup>
</template>

<style lang="scss">
.tooltip {
  position: fixed;
  bottom: 30px;
  right: 10px;
  display: flex;
  flex-direction: column;
  width: 400px;
  background-color: var(--color-white);
  box-shadow: 0px 0px 16px rgba(10, 10, 100, 0.08);
  padding: 16px 28px 16px 64px;
  border-radius: 7px 4px 4px 7px;
  border-left: solid 8px var(--color-green);
  gap: 8px;
  &__closeButton {
    width: 24px;
    height: 24px;
    display: flex;
    border: none;
    padding: 0;
    background-color: var(--color-white);
    position: absolute;
    right: 8px;
    top: 8px;

    &:hover path {
      stroke: var(--color-light-red);
    }
  }
  &::before {
    content: '';
    background-image: url('@/assets/icn/icn-tooltip.svg');
    width: 24px;
    height: 24px;
    position: absolute;
    top: 16px;
    left: 24px;
  }
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
