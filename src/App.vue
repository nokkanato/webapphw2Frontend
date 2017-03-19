<template>
    <el-row id="app" :gutter="20" class="tac">
    <!-- <img src="./assets/logo.png"> -->
    <div v-if="checkLoggedIn()== true">
    <iccs340-left-sidenav></iccs340-left-sidenav>
  </div>
    <router-view></router-view>
  </el-row>
</template>

<script>
import State from './store'
export default {
  methods: {
    checkLoggedIn () {
      if (State.state.auth) {
        return true
      }
    }
  },
  name: 'app',
  components: {
    Iccs340LeftSidenav: require('./leftNav.vue')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
