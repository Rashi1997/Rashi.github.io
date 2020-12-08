<template>
  <div class="bg-color">
    <div class="bar">
      <div>{{ $t("projects.taskhub.title") }}</div>
    </div>
    <div
      class="title"
      v-html="$t('projects.taskhub.parts.Overview.title')"
    ></div>
    <div
      class="subtitle"
      v-html="$t('projects.taskhub.parts.Overview.description')"
    ></div>
    <div
      class="subtitle"
      v-html="$t('projects.taskhub.parts.Overview.description1')"
    ></div>
    <div class="title" v-html="$t('projects.taskhub.parts.Design.title')"></div>
    <div
      class="subtitle"
      v-html="$t('projects.taskhub.parts.Design.description')"
    ></div>
    <div
      class="subtitle"
      v-html="$t('projects.taskhub.parts.Design.description1')"
    ></div>

    <div class="mt-4 align-center">
      <img class="ar" src="../assets/beehive/beehive.png" alt="original" />
    </div>
    <div class="align-center">
      <span class="text-center font-weight-light mt-1"
        >Behavioral tasks exploration table</span
      >
    </div>

    <div class="mt-3 align-center">
      <b-button
        target="blank"
        href="https://beehive.ccv.brown.edu/#/"
        pill
        variant="dark_hue"
      >
        VIST BEEHIVE</b-button
      >
    </div>
    <div
      class="title"
      v-html="$t('projects.taskhub.parts.Conclusion.title')"
    ></div>
    <div
      class="subtitle"
      v-html="$t('projects.taskhub.parts.Conclusion.description')"
    ></div>
    <div
      class="subtitle"
      v-html="$t('projects.taskhub.parts.Conclusion.description1')"
    ></div>
  </div>
</template>

<script>
export default {
  name: "Taskhub",
  props: {},
  components: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modal-footer {
  display: none !important;
}
.bg-color {
  background: linear-gradient(0deg, rgba(42, 183, 202, 0.3), #e9e9e9);
  height: 100%;
  padding-right: 10vw;
  padding-top: 10vh;
  padding-bottom: 10vh;
}
.bar {
  height: 120px;
  border-left: solid 1.2rem #0d7369;
  display: flex;
  align-items: center;
  padding-left: 15vw;
  overflow-wrap: break-word;
  font-family: poppins, sans-serif;
  font-weight: 600;
  font-style: bold;
  font-size: 2.5rem;
  color: #0d7369;
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
.ar {
  width: 50vw;
  height: 40vh;
}
.sg {
  width: 40vw;
  height: 40vh;
}
.logo {
  width: 8vw;
  height: 12vh;
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
  .ar {
    width: 90vw;
    height: 23vh;
  }
  .sg {
    width: 80vw;
    height: 25vh;
  }

  .logo {
    width: 20vw;
    height: 10vh;
  }
}
</style>
