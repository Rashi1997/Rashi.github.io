<template>
  <b-jumbotron class="hero">
    <b-container>
      <b-row class="vh-100" align-v="center">
        <b-col align-h="left">
          <vue-typer
            :text="[$t('home.name')]"
            :repeat="Infinity"
            :shuffle="false"
            initial-action="typing"
            :pre-type-delay="70"
            :type-delay="170"
            :pre-erase-delay="2000"
            :erase-delay="250"
            erase-style="clear"
            :erase-on-complete="false"
            caret-animation="smooth"
          ></vue-typer>
          <p class="subtitle">
            {{ $t("home.role") }}
          </p>
          <b-button pill variant="outline-dark_hue">
            {{ $t("home.work-button") }}</b-button>
        </b-col>
      </b-row>
    </b-container>
  </b-jumbotron>
</template>

<script>
import { VueTyper } from "vue-typer";

export default {
  name: "Home",
  props: {},
  components: {
    // ES6; property shorthand + Vue should automatically dasherize the key for us
    VueTyper,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.subtitle {
  font-size: 2rem;
}
.hero {
  padding: 0;
  margin: 0;
  background-color: #f4ece6;
  padding-left: 10vw;
}
.vue-typer {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 4rem;
  text-align: center;
  font-weight: bolder;
}
.full-height {
  height: 100vh;
}
.rotate {
  width: 2rem;
  height: 2rem;
  background-color: blue;
  animation: rotate 3s infinite linear both;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
