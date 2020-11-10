<template>
  <component :is="tag" :class="`a-text--${type}`">
    <slot />
  </component>
</template>

<script>
export default {
  name: "SpText",
  props: {
    tag: {
      type: String,
      default: "p"
    },
    type: {
      type: String,
      default: "body"
    }
  }
};
</script>

<style lang="scss">
@import "./SpText.scss";
</style>
