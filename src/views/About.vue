<template>
  <b-container class="mt-5 bv-example-row">
    <b-row class="m-2 justify-content-md-center">
      <b-col sm>
        <b-row class="justify-content-md-center" row lg="2">
          <b-card
            class="card d-flex flex-column text-center shadow mb-4 rounded"
          >
            <b-avatar :src="require(`@/assets/me.png`)" size="10rem"></b-avatar>
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
        <b-row class="m-2 justify-content-md-center" row lg="2">
          <Carousel class="carousel" />
        </b-row>
      </b-col>
      <b-col sm>
        <b-row row lg="2" class="m-2">
          <div>
            <h1 class="hello">Hello</h1>
          </div>
          <div>
            <h2 class="sub mb-4">Here is who I am and what I do!</h2>
          </div>
          <br />
          <p class="text">
            <b class="mb-5">“Someone who likes to deliver from Day-1.”</b>
          </p>
          <span class="text mb-3"
            >I am passionate about designing and leading projects from inception
            to completion. Some of my strengths are adapting on the fly, being
            comfortable in new situations and being very analytical. I am a
            results-driven hard in individual who would love to connect over a
            cup of coffee or via email.</span
          >
          <p class="text">
            <b class="mb-5">“Fun Fact about me”</b>
          </p>
          <span class="text mb-3"
            >I enjoy traveling and eating my way around the world. I have an
            artistry side 😀</span
          >
          <p class="text mb-4">
            <i>Checkout my charcoal portraits below!</i>
          </p>
        </b-row>
        <b-row class="pot" row lg="2">
          <Portraits class="shadow rounded" />
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Carousel from "../components/Carousel.vue";
import Portraits from "../components/Portraits.vue";
export default {
  name: "Home",
  props: {},
  components: { Carousel, Portraits },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pot {
  margin-left: 1rem;
  width: 21rem;
}
.about-text {
  margin: 1rem;
}
.text {
  color: black;
  overflow-wrap: break-word;
  font-size: 1.2rem;
}
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
  background-color: #e9e9e9;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 27rem;
  height: 29rem;
  padding: 0.5rem;
}
.card {
  width: 27rem;
  background-color: #e9e9e9 !important;
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
  width: 90px;
  height: 5px;
  margin: 0px 0px 25px 0;
  border-top: 3px solid #0D7369;
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
  background-color: #e9e9e9;
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
  background-color: #0D7369;
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
@media only screen and (max-width: 768px) {
  .pot {
    margin-left: -0.5rem;
    margin-right: 0;
  }
}
</style>
