
import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);



// 1. Define route components.
// These can be imported from other files
import About from './components/About.vue';

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: Home },
    { path: '/about', component: About },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
    routes // short for `routes: routes`
  })

const app = new Vue({
    router
  }).$mount('#app')
  