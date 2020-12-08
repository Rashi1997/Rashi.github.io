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
        <div v-if="name !== 'Home'" class="bar mt-3"></div>
        <b-nav-item v-if="name !== 'Home'" to="/">
          <p style="padding-top: 12px" class="role">
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
          <b-nav-item class="navitem" to="/work">{{
            $t("nav-bar.links.work")
          }}</b-nav-item>
          <b-nav-item
            class="navitem"
            target="blank"
            :href="$t('home.resume')"
            >{{ $t("nav-bar.links.resume") }}</b-nav-item
          >
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
      if (this.name === "About") {
        return "navb-white";
      } else return "navb-color";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.role {
  display: block;
}
.bar {
  height: 30px;
  width: 5px;
  margin-right: 1rem;
  border-right: solid 0.2rem;
}
.navbar-light .nav-item.active .nav-link,
.navbar-light .nav-item .nav-link:active,
.navbar-light .nav-item .nav-link:focus,
.navbar-light .nav-item:hover .nav-link {
  color: #0d7369 !important;
}
.nav-item > a:hover {
  color: #0d7369 !important;
}
.name {
  color: black;
  padding-right: 1rem;
  overflow-wrap: break-word;
  font-family: poppins, sans-serif;
  font-weight: 600;
  font-style: bold;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.navb-color {
  background-color: #e9e9e9;
  position: sticky;
  top: 0;
  z-index: 10;
}
.navb-white {
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 10;
}
.navitem {
  font-size: 1.2rem;
  color: black !important;
  margin: 0.5rem;
  font-weight: 600;
}
.rotate {
  margin-left: 3rem;
  width: 2rem;
  height: 2rem;
  background-color: #0d7369;
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
  .bar {
    display: none;
  }
  .name {
    padding-top: 2rem;
  }
  .role {
    display: none;
  }
}
</style>
