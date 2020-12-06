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
        <b class="wireframe-text">Task 1: Parent Sign-up Process</b>
        <p class="wireframe-text">
          All 3 users found this task easy to implement. They liked that the
          content was very relevant and that there was only a single ‘Next’
          button to perform the navigation successfully. Hence, there wasn’t any
          room for confusion.
        </p>
        <figure>
          <img
            src="../assets/design/gif1.gif"
            alt="Signup process"
            height="350"
            width="200"
          />
          <figcaption>
            User smoothly completes the signup process
          </figcaption>
        </figure>
      </b-carousel-slide>
      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide class="slide">
        <b class="wireframe-text">Task 2: Find a Caregiver</b>
        <p class="wireframe-text">
          The users found this task easy to implement. They felt that the
          navigation was very well guided with concise textual instruction and
          well-labelled buttons. However, one of the users pointed out that they
          were unsure about what to click - caregiver name,image, or the star
          ratings.Their intuition led them to click on the caregiver’s name
          first and that was indeed what it was supposed to be.
        </p>
        <div class="wrapper">
          <div class="grid">
            <div class="grid-item">
              <figure>
                <img
                  src="../assets/design/gif2.gif"
                  alt="Find Caregiver"
                  height="350"
                  width="200"
                />
                <figcaption>User unsure what to click</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide class="slide">
        <b class="wireframe-text">Task 3: Update Profile</b>
        <p class="wireframe-text">
          All 3 users completed the task successfully and with ease. We have 3
          tabs clubbed together at the bottom - Home, Chat, and Me and the users
          instantly knew that they should click on ‘Me’ as it felt more
          intuitive given the task description.
        </p>
        <div class="wrapper">
          <div class="grid">
            <div class="grid-item">
              <figure>
                <img
                  src="../assets/design/gif3.gif"
                  alt="Update Profle"
                  height="350"
                  width="200"
                />
                <figcaption>
                  User intuitively clicked the correct tab
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </b-carousel-slide>
      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide class="slide">
        <b class="wireframe-text">Task 4: Add a Note</b>
        <p class="wireframe-text">
          The users found this task easy to implement, however, they were not
          sure about the functionality of this feature - they don’t know why
          they need to add a note and who does it get submitted to. We think
          this is a valid point because we have not been very descriptive about
          the feature functionalities. We can resolve this issue by making some
          changes to the text on the app and add “Add a note for your
          caregiver”.
        </p>
        <div class="wrapper">
          <div class="grid">
            <div class="grid-item">
              <figure>
                <img
                  src="../assets/design/gif4.gif"
                  alt="Add a note"
                  height="350"
                  width="200"
                />
                <figcaption>User smoothly completes the task</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide class="slide">
        <b class="wireframe-text">Task 5: Message a Pod</b>
        <p class="wireframe-text">
          All 3 users were able to accomplish this task successfully, however, 1
          user did point out that they are not sure how to send the messages as
          we don’t have an ‘send’ icon to send a message.
        </p>
        <div class="wrapper">
          <div class="grid">
            <div class="grid-item">
              <figure>
                <img
                  src="../assets/design/gif5.gif"
                  alt="Message a pod"
                  height="250"
                  width="200"
                />
                <figcaption>User unsure about the submit button</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </b-carousel-slide>
      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide class="slide">
        <b class="wireframe-text">Task 6: Logout</b>
        <p class="wireframe-text">
          All the users accomplished this task successfully, however, some did
          juggle a bit on deciding whether the Logout option is present on
          clicking the ‘Me’ tab or the ‘Home’ tab.
        </p>

        <div class="wrapper">
          <div class="grid">
            <div class="grid-item">
              <figure>
                <img src="../assets/design/gif6.gif" alt="Unsure user" />
                <figcaption>User unsure which tab to choose</figcaption>
              </figure>
            </div>
          </div>
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
  height: 40rem;
  background-color: white !important;
  text-shadow: none !important;
}
.carousel-caption {
  color: black !important;
}
</style>
