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
        <img
          class="d-block m-auto img-fluid w-100"
          :src="require('../assets/design/wireframe-1.png')"
          alt="image slot"
        />
        <div class="wireframe-text">
          We would need two different ways to log into the app or sign up for an
          account, one for parents and one for caregivers.
        </div>
      </b-carousel-slide>
      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide class="slide">
        <img
          class="d-block img-fluid w-100"
          :src="require('../assets/design/wireframe-2.png')"
          alt="image slot"
        />

        <div class="wireframe-text">
          Once a user signs up for an account, there is a multi-page form to
          start the matching process. The form varies for parent vs. caregiver.
          We liked the traditional form look from one of the sketches, and made
          the form have multiple pages with a progress bar based on another
          sketch, since it would help the user clearly navigate through the form
          without getting tired.
        </div>
      </b-carousel-slide>
      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide class="slide">
        <img
          class="d-block img-fluid w-100"
          :src="require('../assets/design/wireframe-3.png')"
          alt="image slot"
        />
        <div class="wireframe-text">
          Once a parent submits the form, they are matched to a pod of other
          parents and can rank the recommended caregivers. The algorithm then
          matches the pod to the best caregiver based on these rankings.
          Caregivers that submit the form pick a recommended pod they are
          comfortable with, and can start chatting with the pod to set up a
          meeting.
        </div>
      </b-carousel-slide>
      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide class="slide">
        <img
          class="d-block img-fluid w-100"
          :src="require('../assets/design/wireframe-5.png')"
          alt="image slot"
        />
        <div class="wireframe-text">
          On the dashboard, parents in a pod can leave notes for the caregiver.
          We liked the simple design of the dashboard in the sketches.
        </div>
      </b-carousel-slide>
      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide class="slide">
        <img
          class="d-block img-fluid w-100"
          :src="require('../assets/design/wireframe-6.png')"
          alt="image slot"
        />
        <div class="wireframe-text">
          We liked the chat feature in one of the sketches, so both parents and
          caregivers can chat with each other in the app for easy communication
          regarding childcare or scheduling.
        </div>
      </b-carousel-slide>
      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide class="slide">
        <img
          class="d-block img-fluid w-100"
          :src="require('../assets/design/wireframe-7.png')"
          alt="image slot"
        />
        <div class="wireframe-text">
          Both parents and caregivers can view their information from their
          profile page. They can edit this information too so that up-to-date
          information can be used to inform future matches.
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
.wireframe-text {
  color: black;
  font-size: 0.8rem;
}
.slide {
  height: 40rem;
  background-color: white !important;
  text-shadow: none !important;
}
.carousel-caption {
  color: black !important;
}
</style>
