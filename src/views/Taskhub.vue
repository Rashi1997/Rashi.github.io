<template>
  <div class="bg-color">
    <div class="bar">
      <div>{{ $t("projects.beehive.title") }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Taskhub",
  props: {},
  components: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg-color {
  background-color: #f4ece6;
  height: 100vh;
  padding-right: 10vw;
  padding-top: 10vh;
  padding-bottom: 10vh;
}
.bar {
  height: 120px;
  border-left: solid 1.2rem blue;
  display: flex;
  align-items: center;
  padding-left: 2rem;
  overflow-wrap: break-word;
  font-family: poppins, sans-serif;
  font-weight: 600;
  font-style: bold;
  font-size: 2.5rem;
  color: blue;
}
</style>
