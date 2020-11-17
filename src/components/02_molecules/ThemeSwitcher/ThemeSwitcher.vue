<template>
  <div class="m-theme-switcher">
    <input
      class="m-theme-switcher__input"
      type="checkbox"
      @change="switchTheme"
      id="theme-switch"
    />
    <label for="theme-switch" class="m-theme-switcher__label">
      <div class="m-theme-switcher__icon-wrapper">
        <img
          v-if="currentTheme === 'light'"
          class="m-theme-switcher__icon"
          src="@/assets/images/doggo.png"
        />
        <img
          v-else
          class="m-theme-switcher__icon"
          src="@/assets/images/doggo_bark.png"
        />
      </div>
      <woof-text tag="span" type="small-l" class="m-theme-switcher__text"
        >Switch to {{ newTheme }} mode</woof-text
      >
    </label>
  </div>
</template>

<script>
import WoofText from "@/components/01_atoms/WoofText/WoofText.vue";
export default {
  name: "ThemeSwitch",
  components: {
    WoofText
  },
  computed: {
    newTheme() {
      return this.currentTheme === "light" ? "bark" : "light";
    }
  },
  data() {
    return {
      currentTheme: "light"
    };
  },
  methods: {
    switchTheme() {
      document.documentElement.dataset.theme = this.newTheme;
      this.currentTheme = this.newTheme;
    }
  }
};
</script>

<style lang="scss">
@import "./ThemeSwitcher.scss";
</style>
