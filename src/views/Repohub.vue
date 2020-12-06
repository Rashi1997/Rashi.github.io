<template>
  <div class="bg-color">
    <div class="bar">
      <div>{{ $t("projects.repohub.title") }}</div>
    </div>
    <div
      class="title"
      v-html="$t('projects.repohub.parts.Overview.title')"
    ></div>
    <div
      class="subtitle"
      v-html="$t('projects.repohub.parts.Overview.description')"
    ></div>
    <div
      class="subtitle"
      v-html="$t('projects.repohub.parts.Overview.description1')"
    ></div>
    <div
      class="title"
      v-html="$t('projects.repohub.parts.Usability.title')"
    ></div>
    <div
      class="subtitle"
      v-html="$t('projects.repohub.parts.Usability.description')"
    ></div>
    <div class="subtitle">
      <span><b>Usability:</b></span>
      <ul>
        <li>
          The site visitors don't get an error when trying to search, filter or
          sort repositories or load the site.
        </li>
        <li>
          There are no dead or broken links on the site.
        </li>
        <li>
          The site can handle different screen sizes and slow connections.
        </li>
        <li>
          The cards section has the ring spinner when the API has not fetched
          results, to make sure the users are engaged.
        </li>
      </ul>
      <span><b>Learnability:</b></span>
      <ul>
        <li>
          The site was developed keeping simplicity in mind to avoid distracting
          the users.
        </li>
        <li>
          The site is developed using the known patterns of having filters in
          sidebars seperate from cards to make learnability easier.
        </li>
        <li>
          There is consistency in the format of the cards and the colors of the
          entire website.
        </li>
        <li>
          The form controls in sidebar have the topics and language in the same
          format as they are in cards.
        </li>
        <li>
          The search on keyword is instant and provides immediate feedback to
          the user.
        </li>
        <li>
          The cards have information in good hierarchy and architecture.
        </li>
      </ul>

      <span><b>Memorability:</b></span>
      <ul>
        <li>
          The site visitors can recognize the cards in bookmarks from the cards
          on filter.
        </li>
        <li>
          The bookmark symbol matches the bookmarks on books.
        </li>
        <li>
          The site uses familiar words like stars, topics, etc as used in
          Github.
        </li>
        <li>
          The form allows to reset all filters to null, providing user control
          over things.
        </li>
      </ul>
      <span><b>Efficiency:</b></span>
      <ul>
        <li>
          The site does an async call to the API and thus we can achieve instant
          keyword search.
        </li>
        <li>
          The site allows to bookmark repositories, providing personalization.
        </li>
        <li>
          The users can also customize the content in cards section based on the
          filters in the sidebar.
        </li>
        <li>
          The repositories are listed as cards to show information in a concise
          and understandable manner.
        </li>
      </ul>
    </div>

    <div class="mt-4 align-center">
      <img class="ar" src="../assets/repohub/architecture.png" alt="original" />
    </div>
    <div class="align-center">
      <span class="text-center font-weight-light mt-1"
        >Architecture of the Web App</span
      >
    </div>

    <div class="mt-4 align-center">
      <img class="logo" src="../assets/repohub/search.png" alt="original" />
    </div>
    <div class="align-center">
      <span class="text-center font-weight-light mt-1"
        >Logo for the Web App</span
      >
    </div>

    <div class="mt-4 align-center">
      <img class="sg" src="../assets/repohub/screenshot.png" alt="original" />
    </div>
    <div class="align-center">
      <span class="text-center font-weight-light mt-1">Repohub Web App</span>
    </div>
    <div class="mt-3 align-center">
      <b-button
        target="blank"
        href="https://agile-crag-93359.herokuapp.com/"
        pill
        variant="outline-dark_hue"
      >
        VIEW DEMO</b-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Repohub",
  props: {},
  components: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modal-footer {
  display: none !important;
}
.bg-color {
  background-color: #f4ece6;
  height: 100%;
  padding-right: 10vw;
  padding-top: 10vh;
  padding-bottom: 10vh;
}
.bar {
  height: 120px;
  border-left: solid 1.2rem blue;
  display: flex;
  align-items: center;
  padding-left: 15vw;
  overflow-wrap: break-word;
  font-family: poppins, sans-serif;
  font-weight: 600;
  font-style: bold;
  font-size: 2.5rem;
  color: blue;
}
.title {
  margin-left: 20vw;
  margin-bottom: 2rem;
  margin-top: 2rem;
  margin-right: 20rem;
  overflow-wrap: break-word;
  font-weight: 600;
  font-family: monospace, sans-serif;
  font-style: bolder;
  font-size: 1.5rem;
}
.subtitle {
  margin-left: 20vw;
  margin-bottom: 2rem;
  margin-top: 2rem;
  margin-right: 20rem;
  overflow-wrap: break-word;
  font-style: normal;
  font-size: 1rem;
}
.align-center {
  display: flex;
  justify-content: center;
  align-content: center;
}
.ar {
  width: 25vw;
  height: 45vh;
}
.sg {
  width: 40vw;
  height: 40vh;
}
.logo {
  width: 8vw;
  height: 12vh;
}
@media only screen and (max-width: 768px) {
  .bg-color {
    padding-right: 5px;
  }
  .title {
    margin-right: 5vw;
  }
  .subtitle {
    margin-right: 5vw;
  }
  .ar {
    width: 80vw;
    height: 50vh;
  }
  .sg {
    width: 80vw;
    height: 25vh;
  }

  .logo {
    width: 20vw;
    height: 10vh;
  }
}
</style>
