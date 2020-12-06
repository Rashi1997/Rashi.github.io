<template>
  <div class="work">
    <b-card-group deck>
      <Card
        v-for="item in $t('projects-1-deck')"
        :key="item.title"
        :item="item"
      />
    </b-card-group>
    <b-card-group deck>
      <Card
        v-for="item in $t('projects-2-deck')"
        :key="item.title"
        :item="item"
      />
    </b-card-group>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
export default {
  name: "Work",
  props: {},
  components: { Card },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.work {
  background-color: #f4ece6;
  height: 100%;
  padding: 10vw;
}
</style>
