<template>
  <el-row :gutter="20" class='login'>
  <!-- <el-col :span="8"><div class="grid-content bg-purple">_</div></el-col> -->
  <el-col :span="8" :offset="8"><div class="grid-content bg-purple-light" id="login">

    <br><br><br><br><br>
    <el id="member">Member</el>
    <br><br><br><br><br>
      <el> Username</el>
      <el-input placeholder="Username" v-model="input"></el-input>
      <br><br>
      <el>password</el>
      <el-input placeholder="Password" type="password" v-model="input"></el-input>
      <br><br>

      <el-button type="primary" size="large" id="loginbut" >Login</el-button>
      <br><br>

      <el-button type="text" id="registerbut" >Register</el-button></li>
      <br><br>
  </div></el-col>
</el-row>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {
      input: ''

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
