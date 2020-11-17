<template>
  <div :class="['m-text-input', { 'm-text-input--error': hasError }]">
    <input :type="type" />
  </div>
</template>

<script>
export default {
  name: "TextInput",
  props: {
    hasError: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "text",
      validator(value) {
        const validTextStyles = ["text", "email"];
        return validTextStyles.includes(value);
      }
    }
  }
};
</script>

<style lang="scss">
@import "./TextInput.scss";
</style>
