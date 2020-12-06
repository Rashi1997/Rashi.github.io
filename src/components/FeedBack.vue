<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide class="slide">
        <b class="wireframe-text">Feedback</b>
        <img
          class="wireframe-img d-block m-auto img-fluid w-100"
          :src="require('../assets/design/crit1.png')"
          alt="image slot"
        />
        <div class="wireframe-text">
          It is hard to distinguish between the parent and caregiver versions of
          the log in and sign up pages. Users may be on the wrong login page and
          be confused why their login isn’t working.
        </div>
      </b-carousel-slide>
      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide class="slide">
        <b class="wireframe-text">Implementation</b>
        <img
          class="wireframe-img d-block img-fluid w-100"
          :src="require('../assets/design/post-crit1.png')"
          alt="image slot"
        />

        <div class="wireframe-text">
          We added text on the login page to differentiate the parent and
          caregiver versions, as well as color-schemed each set of versions
          differently.
        </div>
      </b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide class="slide">
        <b class="wireframe-text">Feedback</b>
        <img
          class="wireframe-img d-block m-auto img-fluid w-100"
          :src="require('../assets/design/crit2.png')"
          alt="image slot"
        />
        <div class="wireframe-text">
          Horizontal scrolling harder and less accessible than vertical
          scrolling for a lot of users.
        </div>
      </b-carousel-slide>
      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide class="slide">
        <b class="wireframe-text">Implementation</b>
        <img
          class="wireframe-img d-block img-fluid w-100"
          :src="require('../assets/design/post-crit2.png')"
          alt="image slot"
        />

        <div class="wireframe-text">
          We changed the cards to be vertically scrollable instead.
        </div>
      </b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide class="slide">
        <b class="wireframe-text">Feedback</b>
        <img
          class="wireframe-img d-block m-auto img-fluid w-100"
          :src="require('../assets/design/crit3.png')"
          alt="image slot"
        />
        <div class="wireframe-text">
          The text on the calendar is too small to read.
        </div>
      </b-carousel-slide>
      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide class="slide">
        <b class="wireframe-text">Implementation</b>
        <img
          class="wireframe-img d-block img-fluid w-100"
          :src="require('../assets/design/post-crit3.png')"
          alt="image slot"
        />

        <div class="wireframe-text">
          We made the calendar larger, so that the text is readable. The
          calendar is still on the smaller side, but it is there mainly just to
          provide an overview of the week.
        </div>
      </b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide class="slide">
        <b class="wireframe-text">Feedback</b>
        <img
          class="wireframe-img d-block m-auto img-fluid w-100"
          :src="require('../assets/design/crit4.png')"
          alt="image slot"
        />
        <div class="wireframe-text">
          COVID-19 related health information is the last piece of information
          in a user’s viewable profile information. This violates principles of
          good information hierarchy since the main purpose of this app is to
          provide safe childcare solutions.
        </div>
      </b-carousel-slide>
      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide class="slide">
        <b class="wireframe-text">Implementation</b>
        <img
          class="wireframe-img d-block img-fluid w-100"
          :src="require('../assets/design/post-crit4.png')"
          alt="image slot"
        />

        <div class="wireframe-text">
          We moved COVID-19 information to be the second piece of information.
        </div>
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
.wireframe-img {
  width: 40vw;
  height: 70vh;
}
.wireframe-text {
  color: black;
  font-size: 0.8rem;
}
.slide {
  height: 43rem;
  background-color: white !important;
  text-shadow: none !important;
}
.carousel-caption {
  color: black !important;
}
</style>
