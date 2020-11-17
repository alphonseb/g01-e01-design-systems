<template>
  <component :is="tag" :class="`a-text--${type}`" :type="inputType">
    <slot />
  </component>
</template>

<script>
export default {
  name: "WoofText",
  props: {
    tag: {
      type: String,
      default: "p"
    },
    type: {
      type: String,
      default: "body-m"
    },
    inputType: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss">
@import "./WoofText.scss";
</style>
