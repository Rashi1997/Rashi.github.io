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
      <b-carousel-slide>
        <template #img>
          <img
            class="sket d-block img-fluid w-100"
            :src="require('../assets/4.png')"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template #img>
          <img
            class="sket d-block img-fluid w-100"
            :src="require('../assets/3.png')"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template #img>
          <img
            class="sket d-block m-auto img-fluid w-100"
            :src="require('../assets/12.png')"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template #img>
          <img
            class="sket d-block img-fluid w-100"
            :src="require('../assets/1.png')"
            alt="image slot"
          />
        </template>
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
.sket {
  width: 18rem;
  height: 23rem;
}
.slide {
  height: 23rem;
  background-color: white !important;
  text-shadow: none !important;
}
.carousel-caption {
  color: black !important;
}
@media only screen and (max-width: 768px) {
  .sket {
    width: 20rem;
  }
}
</style>
