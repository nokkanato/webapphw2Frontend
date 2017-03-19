<template>
  <el-row :gutter="20" class='login'>
  <!-- <el-col :span="8"><div class="grid-content bg-purple">_</div></el-col> -->
  <el-col :span="8" :offset="8"><div class="grid-content bg-purple-light" id="login">

    <br><br><br><br><br>
    <h1 id="member">Member</h1>
    <br><br><br><br><br>
      <h4> Username</h4>
      <el-input placeholder="Username" v-model="username"></el-input>
      <br><br>
      <h3>password</h3>
      <el-input placeholder="Password" type="password" v-model="password"></el-input>
      <br><br>

      <el-button type="primary" size="large" id="loginbut" @click.native="loginn" >Login</el-button>
      <br><br>

      <el-button type="text" id="registerbut" >Register</el-button></li>
      <br><br>
  </div></el-col>
</el-row>
</template>
<script>
import router from '../router'
import UsersApi from '../api/users.js'
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    loginn () {
      console.log('methods.login')
      UsersApi.login(this.username, this.password, function (_response) {
        // NOTE: Posts.index is not yet implemented
        router.push({ name: 'Posts.index' })
        console.log('push to dashboard')
      })
    }
  }
}
</script>

<style>
#member{
  font-size: 50px;
}
#login{
  padding: auto;
}
#loginbut{
  width: 100%
}

</style>
