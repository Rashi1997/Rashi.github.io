<template>
  <div>
    <Nav  :name="$route.name" />
  <router-view/>
</div>
</template>

<script>
import Nav from "./components/Nav.vue";

export default {
  name: "App",
  components: {
    Nav
  },
}
</script>

<style>
.navb {
  background-color: #e9e9e9;
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
</style>
