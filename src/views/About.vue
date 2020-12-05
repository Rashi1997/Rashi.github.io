<template>
  <b-container class="mt-5 bv-example-row">
    <b-row class="justify-content-md-center">
      <b-col sm>
        <b-row class="justify-content-md-center" row lg="2">
          <b-card class="card text-center">
            <b-avatar
              src="https://placekitten.com/300/300"
              size="10rem"
            ></b-avatar>
            <b-card-body class="text-center">
              <h3 class="name">
                <b>{{ $t("home.first-name") }}</b>
              </h3>
              <h3 class="name">
                <b>{{ $t("home.last-name") }}</b>
              </h3>
            </b-card-body>
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
.carousel {
  width: 31rem;
  height: 27rem;
  padding: 2rem;
}
.card {
  width: 27rem;
  height: 35rem;
  padding: 2rem;
}
.name {
  color: black;
  overflow-wrap: break-word;
  font-family: poppins, sans-serif;
  font-weight: 600;
  font-style: bold;
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
  font-size: 2rem;
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
