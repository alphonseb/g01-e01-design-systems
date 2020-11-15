<template>
  <div class="hello">
    <h1 class="test">{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>
    <sp-text tag="h1">{{ testVariable }}</sp-text>
    <button @click="changeText">Click</button>
    <input type="text" v-model="testVariable" />
    <ul>
      <li
        style="display: block"
        v-for="word in testVariable.split(' ')"
        :key="word.id"
      >
        {{ word }}
      </li>
    </ul>
    <ul>
      <li v-for="text in texts" :key="text.id">
        {{ text }}
      </li>
    </ul>
  </div>
</template>

<script>
import SpText from "@/components/01_atoms/SpText/SpText.vue";
export default {
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      default: "blablab",
      required: true
    }
  },
  components: {
    SpText
  },
  computed: {
    computedTest() {
      return this.testVariable.split(" ");
    }
  },
  data() {
    return {
      testVariable: "lalala",
      texts: ["text 1", "text 2", "text 3", "text 4"]
    };
  },
  methods: {
    changeText() {
      this.testVariable = "Truc";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "./HelloWorld.scss";
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
