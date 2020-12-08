<template>
  <b-card class="shadow mb-4 rounded">
    <router-link :to="item.link" class="custom-card">
      <b-card-text>
        <b-container>
          <b-row>
            <b-col>
              <b-row>
                <div class="bar"></div>
                <div class="projecttitle">
                  {{ item.title }}
                </div>
              </b-row>
              <b-row class="des">
                {{ item.description }}
              </b-row>
            </b-col>
            <b-col>
              <b-row>
                <img
                  :src="require(`@/assets/${item.src}`)"
                  width="158"
                  height="280"
                  class="ml-auto"
                />
              </b-row>
            </b-col>
          </b-row>
        </b-container>
      </b-card-text>
    </router-link>
  </b-card>
</template>

<script>
export default {
  name: "Card",
  props: {
    item: null,
  },
  computed: {
    // a computed getter
    src: function() {
      // `this` points to the vm instance
      return "../assets/design/" + this.item.src + ".png";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a.custom-card,
a.custom-card:hover {
  color: inherit;
  text-decoration: none !important;
}
.bar {
  padding-left: 1rem;
  border-left: 1rem solid #0D7369;
  margin-left: -1.29rem;
  height: 3rem;
}
.projecttitle {
  color: #0D7369;
  overflow-wrap: break-word;
  font-family: poppins, sans-serif;
  font-weight: 600;
  font-style: bold;
  font-size: 1.3rem;
}
.des {
  margin: 1rem;
  font-size: 1rem;
}
</style>
