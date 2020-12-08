<template>
  <div class="bg-color">
    <div class="bar">
      <div>{{ $t("projects.redesign.title") }}</div>
    </div>
    <div
      class="title"
      v-html="$t('projects.redesign.parts.Overview.title')"
    ></div>
    <div
      class="subtitle"
      v-html="$t('projects.redesign.parts.Overview.description')"
    ></div>
    <div
      class="subtitle"
      v-html="$t('projects.redesign.parts.Overview.description1')"
    ></div>
    <div
      class="title"
      v-html="$t('projects.redesign.parts.Process.title')"
    ></div>
    <div
      class="subtitle"
      v-html="$t('projects.redesign.parts.Process.description')"
    ></div>
    <div class="align-center">
      <img class="image" src="../assets/redesign/original.png" alt="original" />
    </div>
    <div class="align-center">
      <span class="text-center font-weight-light mt-1"
        >The current homepage of Toronto Cupcakes.</span
      >
    </div>
    <div
      class="subtitle"
      v-html="$t('projects.redesign.parts.Process.description1')"
    ></div>
    <div
      class="subtitle"
      v-html="$t('projects.redesign.parts.Process.description2')"
    ></div>
    <div class="align-center">
      <b-button v-b-modal.low-fi pill variant="dark_hue" class="mr-2">
        Low-Fi Prototypes</b-button
      >

      <b-button v-b-modal.hi-fi pill variant="dark_hue">
        Hi-Fi Prototypes</b-button
      >
      <b-modal ok-only ok-variant="dark_hue" id="low-fi"
        ><LowFiCarousel
      /></b-modal>
      <b-modal ok-only ok-variant="dark_hue" id="hi-fi"
        ><HiFiCarousel
      /></b-modal>
    </div>
    <div class="mt-4 align-center">
      <img
        class="sg"
        src="../assets/redesign/visualstyleguide.png"
        alt="original"
      />
    </div>
    <div class="align-center">
      <span class="text-center font-weight-light mt-1"
        >Visual Style Guide of redesigned website.</span
      >
    </div>
    <div
      class="title"
      v-html="$t('projects.redesign.parts.Deployed.title')"
    ></div>
    <div
      class="subtitle"
      v-html="$t('projects.redesign.parts.Deployed.description')"
    ></div>
    <b-container class="bv-example-row">
      <b-row align-v="center">
        <b-col class="text-center">
          <p class="h5 font-weight-light"></p>
          <b-img
            class="deploy"
            :src="require('../assets/redesign/deploy.png')"
            fluid
            alt="Responsive image"
          ></b-img>
          <p class="mt-2 font-weight-light text-center">
            Redesigned Homepage
          </p>
        </b-col>
      </b-row>
    </b-container>
    <div class="align-center">
      <b-button
        target="blank"
        href="https://frozen-basin-88210.herokuapp.com/"
        pill
        variant="dark_hue"
      >
        VIEW DEMO</b-button
      >
    </div>
    <div
      class="title"
      v-html="$t('projects.redesign.parts.Conclusion.title')"
    ></div>
    <div
      class="subtitle"
      v-html="$t('projects.redesign.parts.Conclusion.description')"
    ></div>
    <div
      class="subtitle"
      v-html="$t('projects.redesign.parts.Conclusion.description1')"
    ></div>
  </div>
</template>

<script>
import LowFiCarousel from "../components/LowFiCarousel.vue";
import HiFiCarousel from "../components/HiFiCarousel.vue";
export default {
  name: "Redesign",
  props: {},
  components: {
    LowFiCarousel,
    HiFiCarousel,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modal-footer {
  display: none !important;
}
.bg-color {
  /* background-color: #e9e9e9; */
  background: linear-gradient(0deg, rgba(42, 183, 202, 0.3), #e9e9e9);
  height: 100%;
  padding-right: 10vw;
  padding-top: 10vh;
  padding-bottom: 10vh;
}
.bar {
  height: 120px;
  border-left: solid 1.2rem #0D7369;
  display: flex;
  align-items: center;
  padding-left: 15vw;
  overflow-wrap: break-word;
  font-family: poppins, sans-serif;
  font-weight: 600;
  font-style: bold;
  font-size: 2.5rem;
  color: #0D7369;
}
.title {
  margin-left: 20vw;
  margin-bottom: 2rem;
  margin-top: 2rem;
  margin-right: 20rem;
  overflow-wrap: break-word;
  font-weight: 600;
  font-family: monospace, sans-serif;
  font-style: bolder;
  font-size: 1.5rem;
}
.subtitle {
  margin-left: 20vw;
  margin-bottom: 2rem;
  margin-top: 2rem;
  margin-right: 20rem;
  overflow-wrap: break-word;
  font-style: normal;
  font-size: 1rem;
}
.align-center {
  display: flex;
  justify-content: center;
  align-content: center;
}
.image {
  width: 30vw;
  height: 55vh;
}
.sg {
  width: 30vw;
  height: 45vh;
}
.deploy {
  width: 50vw;
  height: 40vh;
}
@media only screen and (max-width: 768px) {
  .bg-color {
    padding-right: 5px;
  }
  .title {
    margin-right: 5vw;
  }
  .subtitle {
    margin-right: 5vw;
  }
  .image {
    width: 80vw;
    height: 50vh;
  }
  .sg {
    width: 80vw;
    height: 30vh;
  }

  .deploy {
    width: 80vw;
    height: 20vh;
  }
}
</style>
