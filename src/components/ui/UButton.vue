<script setup></script>

<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<style lang="scss">
.button {
  padding: 9px 75px;
  border: 1px solid var(--color-dark-grey);
  border-radius: 4px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: #1c2530;
  background-color: var(--color-white);

  &:hover {
    background-color: var(--color-smoke-white);
  }
}
</style>
