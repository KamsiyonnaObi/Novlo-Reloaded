<template>
  <v-app>
    <v-app-bar color="navigation" flat>
      <v-container fluid>
        <v-row class="justify-space-between">
          <v-col cols="12" class="d-flex align-center justify-center">
            <v-btn color="primary" exact text large dark> Home </v-btn>
            <v-btn color="primary" text large dark> About </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
    <HelloWorld msg="Welcome to Novlo Reloaded Page" />
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
