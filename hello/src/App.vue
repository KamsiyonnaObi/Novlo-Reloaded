<template>
  <v-app>
    <v-app-bar 
      class="custom-nav-bar" 
      flat app position="sticky" 
      color="black"
      dark
      shrink-on-scroll
      prominent
      scroll-target="#scrolling-techniques"
      >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
  
        <v-toolbar-title>Title</v-toolbar-title>
  
        <v-spacer></v-spacer>
  
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
  
        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>
  
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      <v-container>
        <v-row class="justify-space-between">
          <v-col cols="12" class="d-flex align-center justify-center">
            <v-img
              max-height="250"
              max-width="250"
              :src="require('./assets/Novlo2.jpg')"
            ></v-img>
            <v-btn color="#0323cb" exact text large dark> Home </v-btn>
            <v-btn color="#0323cb" text large dark> About </v-btn>
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
