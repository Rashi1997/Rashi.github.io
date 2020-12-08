<template>
  <div class="mb-4">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="600"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide class="slide">
        <h3
          style="color:black; overflow-wrap: break-word;"
          class="mb-3 text-left"
        >
          {{ $t("about.carousel-slide-1.title") }}
        </h3>
        <a target="blank" :href="$t('about.carousel-slide-1.ccv.link')">
          <img
            src="../assets/ccv.png"
            :alt="$t('about.carousel-slide-1.ccv.alt')"
            width="100"
            height="100"
            class="m-2"
          />
        </a>
        <a target="blank" :href="$t('about.carousel-slide-1.brown.link')">
          <img
            src="../assets/brown.png"
            :alt="$t('about.carousel-slide-1.brown.alt')"
            width="100"
            height="50"
            class="m-2"
          />
        </a>
        <a target="blank" :href="$t('about.carousel-slide-1.capgemini.link')">
          <img
            src="../assets/capgemini.png"
            :alt="$t('about.carousel-slide-1.capgemini.alt')"
            width="130"
            height="30"
            class="m-2"
          />
        </a>
        <a target="blank" :href="$t('about.carousel-slide-1.cisco.link')">
          <img
            src="../assets/cisco.png"
            :alt="$t('about.carousel-slide-1.cisco.alt')"
            width="90"
            height="40"
            class="m-2"
          />
        </a>
        <a target="blank" :href="$t('about.carousel-slide-1.lt.link')">
          <img
            src="../assets/lt.png"
            :alt="$t('about.carousel-slide-1.lt.alt')"
            width="30"
            height="30"
            class="m-2 mb-4"
          />
        </a>
      </b-carousel-slide>

      <!-- Text slides with image -->
      <b-carousel-slide class="slide">
        <h3
          style="color:black; overflow-wrap: break-word;"
          class="mb-3 text-left"
        >
          {{ $t("about.carousel-slide-2.title") }}
        </h3>
        <a target="blank" :href="$t('about.carousel-slide-2.javascript.link')">
          <img
            src="../assets/javascript.png"
            :alt="$t('about.carousel-slide-2.javascript.alt')"
            width="55"
            height="55"
            class="m-2"
          />
        </a>
        <a target="blank" :href="$t('about.carousel-slide-2.java.link')">
          <img
            src="../assets/java.png"
            :alt="$t('about.carousel-slide-2.java.alt')"
            width="80"
            height="40"
            class="m-2"
          />
        </a>
        <a target="blank" :href="$t('about.carousel-slide-2.python.link')">
          <img
            src="../assets/python.png"
            :alt="$t('about.carousel-slide-2.python.alt')"
            width="90"
            height="28"
            class="m-2"
          />
        </a>
        <a target="blank" :href="$t('about.carousel-slide-2.matlab.link')">
          <img
            src="../assets/matlab.png"
            :alt="$t('about.carousel-slide-2.matlab.alt')"
            width="110"
            height="35"
            class="m-2"
          />
        </a>
        <a target="blank" :href="$t('about.carousel-slide-2.html.link')">
          <img
            src="../assets/html.png"
            :alt="$t('about.carousel-slide-2.html.alt')"
            width="40"
            height="40"
            class="m-2"
          />
        </a>
        <a target="blank" :href="$t('about.carousel-slide-2.bootstrap.link')">
          <img
            src="../assets/bootstrap.png"
            :alt="$t('about.carousel-slide-2.bootstrap.alt')"
            width="30"
            height="30"
            class="m-2"
          />
        </a>
        <a target="blank" :href="$t('about.carousel-slide-2.bulma.link')">
          <img
            src="../assets/bulma.png"
            :alt="$t('about.carousel-slide-2.bulma.alt')"
            width="80"
            height="15"
            class="m-2"
          />
        </a>
        <a target="blank" :href="$t('about.carousel-slide-2.vue.link')">
          <img
            src="../assets/vue.png"
            :alt="$t('about.carousel-slide-2.vue.alt')"
            width="40"
            height="40"
            class="m-2"
          />
        </a>
        <a target="blank" :href="$t('about.carousel-slide-2.nodejs.link')">
          <img
            src="../assets/nodejs.png"
            :alt="$t('about.carousel-slide-2.nodejs.alt')"
            width="70"
            height="35"
            class="m-2"
          />
        </a>
        <a target="blank" :href="$t('about.carousel-slide-2.github.link')">
          <img
            src="../assets/github.png"
            :alt="$t('about.carousel-slide-2.github.alt')"
            width="40"
            height="40"
            class="m-2"
          />
        </a>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>
<style scoped>
.slide {
  z-index: 1;
  margin-bottom: 3rem;
  height: 28rem;
  background-color: #e9e9e9 !important;
  text-shadow: none !important;
}
.carousel-caption {
  color: black !important;
}
</style>
