<template>
  <div>
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
        <h2 style="color:black; overflow-wrap: break-word;" class="text-left">
          {{ $t("about.carousel-slide-1.title") }}
        </h2>
        <a target="blank" :href="$t('about.carousel-slide-1.ccv.link')">
          <img
            src="../assets/ccv.png"
            :alt="$t('about.carousel-slide-1.ccv.alt')"
            width="120"
            height="120"
            class="m-2"
          />
        </a>
        <a target="blank" :href="$t('about.carousel-slide-1.brown.link')">
          <img
            src="../assets/brown.png"
            :alt="$t('about.carousel-slide-1.brown.alt')"
            width="120"
            height="70"
            class="m-2"
          />
        </a>
        <a target="blank" :href="$t('about.carousel-slide-1.capgemini.link')">
          <img
            src="../assets/capgemini.png"
            :alt="$t('about.carousel-slide-1.capgemini.alt')"
            width="150"
            height="50"
            class="m-2"
          />
        </a>
        <a target="blank" :href="$t('about.carousel-slide-1.cisco.link')">
          <img
            src="../assets/cisco.png"
            :alt="$t('about.carousel-slide-1.cisco.alt')"
            width="110"
            height="60"
            class="m-2"
          />
        </a>
        <a target="blank" :href="$t('about.carousel-slide-1.lt.link')">
          <img
            src="../assets/lt.png"
            :alt="$t('about.carousel-slide-1.lt.alt')"
            width="50"
            height="50"
            class="m-2"
          />
        </a>
      </b-carousel-slide>

      <!-- Text slides with image -->
      <b-carousel-slide class="slide">
        <h2 style="color:black; overflow-wrap: break-word;" class="text-left">
          {{ $t("about.carousel-slide-2.title") }}
        </h2>
        <a target="blank" :href="$t('about.carousel-slide-2.javascript.link')">
          <img
            src="../assets/javascript.png"
            :alt="$t('about.carousel-slide-2.javascript.alt')"
            width="60"
            height="60"
            class="m-2"
          />
        </a>
        <a target="blank" :href="$t('about.carousel-slide-2.java.link')">
          <img
            src="../assets/java.png"
            :alt="$t('about.carousel-slide-2.java.alt')"
            width="80"
            height="60"
            class="m-2"
          />
        </a>
        <a target="blank" :href="$t('about.carousel-slide-2.python.link')">
          <img
            src="../assets/python.png"
            :alt="$t('about.carousel-slide-2.python.alt')"
            width="90"
            height="35"
            class="m-2"
          />
        </a>
        <a target="blank" :href="$t('about.carousel-slide-2.matlab.link')">
          <img
            src="../assets/matlab.png"
            :alt="$t('about.carousel-slide-2.matlab.alt')"
            width="120"
            height="45"
            class="m-2"
          />
        </a>
        <a target="blank" :href="$t('about.carousel-slide-2.html.link')">
          <img
            src="../assets/html.png"
            :alt="$t('about.carousel-slide-2.html.alt')"
            width="60"
            height="60"
            class="m-2"
          />
        </a>
        <a target="blank" :href="$t('about.carousel-slide-2.bootstrap.link')">
          <img
            src="../assets/bootstrap.png"
            :alt="$t('about.carousel-slide-2.bootstrap.alt')"
            width="50"
            height="50"
            class="m-2"
          />
        </a>
        <a target="blank" :href="$t('about.carousel-slide-2.bulma.link')">
          <img
            src="../assets/bulma.png"
            :alt="$t('about.carousel-slide-2.bulma.alt')"
            width="90"
            height="30"
            class="m-2"
          />
        </a>
        <a target="blank" :href="$t('about.carousel-slide-2.vue.link')">
          <img
            src="../assets/vue.png"
            :alt="$t('about.carousel-slide-2.vue.alt')"
            width="50"
            height="50"
            class="m-2"
          />
        </a>
        <a target="blank" :href="$t('about.carousel-slide-2.nodejs.link')">
          <img
            src="../assets/nodejs.png"
            :alt="$t('about.carousel-slide-2.nodejs.alt')"
            width="80"
            height="45"
            class="m-2"
          />
        </a>
        <a target="blank" :href="$t('about.carousel-slide-2.github.link')">
          <img
            src="../assets/github.png"
            :alt="$t('about.carousel-slide-2.github.alt')"
            width="50"
            height="50"
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
  height: 28rem;
  background-color: #f4ece6 !important;
  text-shadow: none !important;
}
.carousel-caption {
  color: black !important;
}
</style>
