<template>
  <v-app>
    <v-app-bar class="custom-nav-bar" flat app position="sticky">
      <v-container>
        <v-row class="justify-space-between">
          <v-col cols="12" class="d-flex align-center justify-center">
            <v-img
              max-height="100"
              max-width="100"
              :src="require('./assets/Novlo2.jpg')"
            ></v-img>
            <v-btn color="primary" exact text large dark> Home </v-btn>
            <v-btn color="primary" text large dark> About </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-main>
      <HelloWorld msg="Welcome to Novlo Reloaded Page" />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data: () => ({}),
};
</script>

<style>
#app {

  text-align: center;
}
</style>
