<template>
  <div  class="navb">
  <b-navbar toggleable="lg" sticky>
    <span class="rotate"></span>
    <b-navbar-nav class="ml-4">
    <b-nav-item v-if="name!=='Home'" to="/"><h3>RASHI DHAR</h3></b-nav-item>
    </b-navbar-nav>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item class="navitem" to="/about">ABOUT</b-nav-item>
        <b-nav-item class="navitem">WORK</b-nav-item>
        <b-nav-item class="navitem">RESUME</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>

export default {
  name: "Home",
  props: {
    name: null,
    variant: null
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navb {
  background-color: #f4ece6;
  position: sticky;
  top: 0;
}
.navitem {
  font-size: 1.2rem;
  margin: 0.5rem;
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
