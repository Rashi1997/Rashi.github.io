<template>
  <div class="bg-color">
    <div class="bar">
      <div>{{ $t("projects.design.title") }}</div>
    </div>
    <div
      class="title"
      v-html="$t('projects.design.parts.Overview.title')"
    ></div>
    <div
      class="subtitle"
      v-html="$t('projects.design.parts.Overview.description')"
    ></div>
    <div
      class="subtitle"
      v-html="$t('projects.design.parts.Overview.description1')"
    ></div>
    <div class="title" v-html="$t('projects.design.parts.Design.title')"></div>
    <div
      class="subtitle"
      v-html="$t('projects.design.parts.Design.description')"
    ></div>
    <div
      class="subtitle"
      v-html="$t('projects.design.parts.Design.description1')"
    ></div>

    <div class="title" v-html="$t('projects.design.parts.Problem.title')"></div>
    <div
      class="subtitle"
      v-html="$t('projects.design.parts.Problem.description')"
    ></div>
    <div
      class="title"
      v-html="$t('projects.design.parts.Solution.title')"
    ></div>
    <div
      class="subtitle"
      v-html="$t('projects.design.parts.Solution.description')"
    ></div>

    <div
      class="title"
      v-html="$t('projects.design.parts.Sketches.title')"
    ></div>
    <div
      class="subtitle"
      v-html="$t('projects.design.parts.Sketches.description')"
    ></div>
    <div class="mt-3 align-center">
      <b-button v-b-modal.sketches pill variant="dark_hue">
        EXPLORE INITIAL SKETCHES!</b-button
      >
      <b-modal ok-only ok-variant="dark_hue" id="sketches"
        ><Sketches
      /></b-modal>
    </div>
    <div
      class="title"
      v-html="$t('projects.design.parts.Wireframing.title')"
    ></div>
    <div
      class="subtitle"
      v-html="$t('projects.design.parts.Wireframing.description')"
    ></div>

    <div class="mt-3 align-center">
      <b-button v-b-modal.low-fi pill variant="dark_hue">
        LO-FI PROTOTYPE</b-button
      >
      <b-modal ok-only ok-variant="dark_hue" id="low-fi"
        ><LowFiDesign
      /></b-modal>
    </div>
    <div class="mt-3 align-center">
      <b-button v-b-modal.sg pill variant="dark_hue">
        VISUAL STYLE GUIDE</b-button
      >
      <b-modal ok-only ok-variant="dark_hue" id="sg"
        ><img src="../assets/design/design-guide.png" width="450" height="300"
      /></b-modal>
    </div>
    <div
      class="subtitle"
      v-html="$t('projects.design.parts.Wireframing.description1')"
    ></div>
    <div class="mt-4 align-center">
      <img class="flow" src="../assets/design/flow.png" alt="original" />
    </div>
    <div class="align-center">
      <span class="text-center font-weight-light mt-1">Web App Workflow</span>
    </div>

    <div
      class="subtitle"
      v-html="$t('projects.design.parts.Wireframing.description2')"
    ></div>
    <div class="mt-3 align-center">
      <b-button v-b-modal.feed pill variant="dark_hue">
        FEEDBACK & CHANGES</b-button
      >
      <b-modal ok-only ok-variant="dark_hue" id="feed"><FeedBack /></b-modal>
    </div>

    <div class="title" v-html="$t('projects.design.parts.User.title')"></div>
    <div
      class="subtitle"
      v-html="$t('projects.design.parts.User.description')"
    ></div>

    <div class="mt-3 align-center">
      <b-button v-b-modal.task pill variant="dark_hue"> TASK ANALYSIS</b-button>
      <b-modal ok-only ok-variant="dark_hue" id="task"
        ><TaskAnalysis
      /></b-modal>
    </div>

    <div class="mt-3 align-center">
      <b-button
        target="blank"
        href="https://www.figma.com/proto/Baqjpt8YgVxWTeqwVRuIiu/Iterative-Design?node-id=52%3A80&scaling=scale-down"
        pill
        variant="dark_hue"
      >
        VIST FINAL PROTOTYPE</b-button
      >
    </div>

    <div
      class="title"
      v-html="$t('projects.design.parts.conclusion.title')"
    ></div>
    <div
      class="subtitle"
      v-html="$t('projects.design.parts.conclusion.description')"
    ></div>
  </div>
</template>

<script>
import Sketches from "../components/Sketches.vue";
import LowFiDesign from "../components/LowFiDesign.vue";
import FeedBack from "../components/FeedBack.vue";
import TaskAnalysis from "../components/TaskAnalysis.vue";
export default {
  name: "Taskhub",
  props: {},
  components: {
    Sketches,
    LowFiDesign,
    FeedBack,
    TaskAnalysis,
  },
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
.flow {
  width: 25vw;
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
    width: 80vw;
    height: 50vh;
  }
  .flow {
    width: 80vw;
    height: 50vh;
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
