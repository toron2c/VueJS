<template>
  <div id="app">
    <Navigation />
   <div class="content">
     <router-view></router-view>
   </div>
  </div>
</template>

<script>
import Navigation from "./Navigation/Navigation";
import {mapActions} from "vuex";
export default {
  name: 'App',
  components: {Navigation},
  methods: {
    ...mapActions('payments', ['fetchData', 'loadCategories']),
  },
  created() {
    this.fetchData();
    this.loadCategories();
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.content {
  margin: 0 auto;
  width: 800px;
  height: 600px;
  background: #faf9dbf7;
  border: 25px solid #524e4e;
  border-radius: 25px;
}
</style>
