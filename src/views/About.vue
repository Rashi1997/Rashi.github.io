<template>
  <b-container class="mt-5 bv-example-row">
    <b-row class="justify-content-md-center">
      <b-col sm>
        <b-row class="justify-content-md-center" row lg="2">
          <b-card
            class="card d-flex flex-column text-center shadow mb-4 rounded"
          >
            <b-avatar
              src="https://placekitten.com/300/300"
              size="10rem"
            ></b-avatar>
            <b-card-body class="text-center">
              <h3 class="name">
                <b>{{ $t("home.first-name") }}</b>
              </h3>
              <h3 class="name mb-3">
                <b>{{ $t("home.last-name") }}</b>
              </h3>
              <div class="border1 mx-auto"></div>
              <p class="mb-4">
                <b class="subtitle1">{{ $t("home.role") }}</b>
              </p>
            </b-card-body>
            <div class="justify-content-md-center footer1 bg-white">
              <div>
                <a target="blank" :href="$t('social.github')">
                  <img
                    src="../assets/github_color.svg"
                    alt="github"
                    width="30"
                    height="30"
                    class="mr-3"
                  />
                </a>
                <a target="blank" :href="$t('social.linkedin')">
                  <img
                    src="../assets/linkedin_color.svg"
                    alt="github"
                    width="30"
                    height="30"
                    class="mr-3"
                  />
                </a>
                <a target="blank" :href="$t('social.facebook')">
                  <img
                    src="../assets/facebook_color.svg"
                    alt="github"
                    width="30"
                    height="30"
                    class="mr-3"
                  />
                </a>

                <a target="blank" :href="$t('social.instagram')">
                  <img
                    src="../assets/instagram_color.svg"
                    alt="github"
                    width="30"
                    height="30"
                    class="mr-3"
                  />
                </a>
              </div>
            </div>
          </b-card>
        </b-row>
        <b-row class="justify-content-md-center" row lg="2">
          <Carousel class="carousel" />
        </b-row>
      </b-col>
      <b-col sm>
        <b-row row lg="2">
          <h1 class="hello">Hello</h1>
          <h2 class="sub">Here is who I am and what I do!</h2>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Carousel from "../components/Carousel.vue";
export default {
  name: "Home",
  props: {},
  components: { Carousel },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer1 {
  height: 6.7rem;
  margin-left: -3.2rem;
  margin-right: -3.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.subtitle1 {
  letter-spacing: 1.15;
  font-size: 1.2rem;
}
.carousel {
  background-color: #f4ece6;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 27rem;
  height: 29rem;
  padding: 0.5rem;
}
.card {
  width: 27rem;
  background-color: #f4ece6 !important;
  height: 35rem;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 2rem;
}
.name {
  color: black;
  overflow-wrap: break-word;
  font-family: poppins, sans-serif;
  font-weight: 600;
  font-style: bold;
}
.border1 {
  width: 50px;
  height: 5px;
  margin: 0px 0px 25px 0;
  border-top: 2px solid blue;
}
.hello {
  color: black;
  overflow-wrap: break-word;
  font-family: poppins, sans-serif;
  font-weight: 800;
  font-style: bold;
  font-size: 6rem;
}
.sub {
  color: black;
  overflow-wrap: break-word;
  font-family: poppins, sans-serif;
  font-weight: normal;
  font-size: 1.5rem;
}
.subtitle {
  font-size: 2rem;
}
.hero {
  padding: 0;
  margin: 0;
  background-color: #f4ece6;
  padding-left: 10vw;
}
.vue-typer {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 4rem;
  text-align: center;
  font-weight: bolder;
}
.full-height {
  height: 100vh;
}
.rotate {
  width: 2rem;
  height: 2rem;
  background-color: blue;
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
</style>
