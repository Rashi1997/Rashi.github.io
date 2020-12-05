<template>
  <div :class="bgcolor">
    <b-navbar toggleable="lg" sticky>
      <span class="rotate"></span>
      <b-navbar-nav class="ml-4">
        <b-nav-item v-if="name !== 'Home'" to="/">
          <h3 class="name">
            <b> {{ $t("home.name") }}</b>
          </h3></b-nav-item
        >
        <b-nav-item v-if="name !== 'Home'" to="/">
          <p style="font-familty: Monospace; padding-top: 6px">
            <b>{{ $t("home.role") }}</b>
          </p></b-nav-item
        >
      </b-navbar-nav>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item class="navitem" to="/about">{{
            $t("nav-bar.links.about")
          }}</b-nav-item>
          <b-nav-item class="navitem">{{
            $t("nav-bar.links.work")
          }}</b-nav-item>
          <b-nav-item class="navitem">{{
            $t("nav-bar.links.resume")
          }}</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  props: {
    name: null,
    variant: null,
  },
  computed: {
    // a computed getter
    bgcolor: function() {
      // `this` points to the vm instance
      if (this.name !== "Home") {
        return "navb-white";
      } else return "navb-color";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.name {
  color: black;
  border-right: solid 0.2rem;
  padding-right: 1rem;
  overflow-wrap: break-word;
  font-family: poppins, sans-serif;
  font-weight: 600;
  font-style: bold;
}
.navb-color {
  background-color: #f4ece6;
  position: sticky;
  top: 0;
  z-index: 1;
}
.navb-white {
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 1;
}
.navitem {
  font-size: 1rem;
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
