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
          <b-button class="mt-2" pill variant="dark_hue" to="/work">
            {{ $t("home.work-button") }}</b-button
          >
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
  font-size: 3.2rem;
  font-family: sacre-bleu-mvb, sans-serif;
  font-weight: bolder;
}
.hero {
  padding: 0;
  margin: 0;
  /* background-color: #e9e9e9; */
  /* background-image: url("../assets/home.jpeg");
  background-repeat: no-repeat;
  background-size: cover; */
  min-height: 100%;
  background: linear-gradient(0deg, rgba(42, 183, 202, 0.3), #e9e9e9),
    url("../assets/home.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  padding-left: 10vw;
}
.vue-typer {
  font-family: sacre-bleu-mvb, sans-serif;
  font-weight: 1000;
  font-style: bolder;
  font-size: 7rem;
  color: #146666 !important;
}
.full-height {
  height: 100vh;
}
.rotate {
  width: 2rem;
  height: 2rem;
  background-color: #0b626b;
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
@media only screen and (max-width: 768px) {
  .vue-typer {
    font-size: 3.5rem;
    color: #146666 !important;
  }
  .subtitle {
    font-size: 1.7rem;
  }
}
</style>
