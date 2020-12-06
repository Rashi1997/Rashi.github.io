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
                <b-img
                  src="https://placekitten.com/300/300"
                  width="200"
                  height="200"
                >
                </b-img>
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
  border-left: 1rem solid blue;
  margin-left: -1.29rem;
  height: 3rem;
}
.projecttitle {
  color: blue;
  overflow-wrap: break-word;
  font-family: poppins, sans-serif;
  font-weight: 600;
  font-style: bold;
  font-size: 1rem;
}
.des {
  margin: 1rem;
  font-size: 0.9rem;
}
</style>
