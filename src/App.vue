<template>
  <v-app>
    <v-app-bar app color="pink accent-4" height="80px" prominent>
      <v-container>
        <v-row dense>
          <v-col cols="4" sm="12" md="4">
            <div class="d-flex align-center logo ">
              <router-link to="/">
                <a href="#" class="white--text text-decoration-none">
                  <span class="headline white--text text-no-wrap">VUE BLOG</span>
                </a>
              </router-link>
            </div>
          </v-col>

          <v-spacer></v-spacer>

          <v-col md="8" cols="8" :class="currentRouteName == 'Dashboard' ? 'd-none text-right' : 'd-block text-right'">
            <div class="menu hidden-sm-and-down">
              <router-link to="/">
                <a class="white--text text-captialized">Home</a>
              </router-link>
              <router-link to="/about">
                <a class="white--text text-captialized">About</a>
              </router-link>
              <router-link to="/latest-post">
                <a class="white--text text-captialized">Latest</a>
              </router-link>
              <router-link to="/contact">
                <a class="white--text text-captialized">Contact</a>
              </router-link>
            </div>
          </v-col>
          <v-col  class="white--text text-right" v-if="currentRouteName == 'Dashboard'">
            <v-avatar>
              <img
                src="https://cdn.vuetifyjs.com/images/john.jpg"
                alt="John"
              >
            </v-avatar>
          </v-col>
        </v-row>
      </v-container>
      <v-app-bar-nav-icon class="white--text mt-2 hidden-md-and-up" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <!--=================================
                    MOBILE MENU
    ==================================-->

    <v-navigation-drawer v-model="drawer" fixed top right class="hidden-md-and-up">
      <v-list dense class="p-0">
        <v-list-item-group v-model="group" active-class="pink--text text--accent-4">
          <v-list-item-title class="text-center my-5">
            <h3>
              <v-icon color="pink" class="mr-1">mdi-blogger</v-icon>VUE BLOG
            </h3>
          </v-list-item-title>
          <v-list-item to="/">
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item to="/about">
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>

          <v-list-item to="/latest-post">
            <v-list-item-title>Latest</v-list-item-title>
          </v-list-item>

          <v-list-item to="/contact">
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer dark padless>
      <v-card class="flex" flat tile>
        <v-card-title class="pink accent-4">
          <v-container>
            <v-row justify="space-around">
              <v-col cols="12" md="6">
                <strong class="subheading">Get connected with us on social networks!</strong>
              </v-col>
              <v-col md="6" class="text-right">
                <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
                  <v-icon size="24px">{{ icon }}</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card-title>

        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} —
          <strong>VUE BLOG</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>
<style  scoped>
.menu a {
  text-decoration: none;
  margin: 0 10px;
  padding-bottom: 30px;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 1px;
}
.d-none{
  display: none
}
.logo a {
  text-decoration: none;
}
.menu a:hover,
.menu a.router-link-exact-active {
  border-bottom: 3px solid #fff;
  transition: cubic-bezier(0.6, 0.04, 0.98, 0.335);
}
</style>
<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    drawer: false,
    group: null,
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },

  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
};
</script>
