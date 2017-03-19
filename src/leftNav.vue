<template lang="html">
    <el-col class='leftnav' :span="4" :offset="0">
    <el-menu default-active="2" class="el-menu-vertical-demo" >
      <br><h1>Member</h1>
      <el-progress type="circle" :percentage="100" >picture</el-progress>
      <br>Profile<br><br>

      <br><br>
      <el-menu-item>
        <el-button type="success" @click.native="addPost">Add Post</el-button>


      </el-menu-item>
      <el-menu-item>
        <el-button type="warning" @click.native="viewPost">View Post</el-button>


      </el-menu-item>
      <el-menu-item>
        <el-button type="danger" @click.native="logout">Logout</el-button>


      </el-menu-item>



      <br><br><br><br><br>
    </el-menu>


  </el-col>
</template>

<script>
// import PostsApi from '@/api/post.js'
import UsersApi from '@/api/users.js'
import router from '@/router'
export default {
  name: 'leftnav',
  methods: {
    toggleLeftSidenav () {
      this.$refs.leftSidenav.toggle()
    },
    addPost () {
      router.push({ name: 'Posts.new' })
    },
    viewPost () {
      router.push({ name: 'Posts.index' })
    },
    logout () {
      UsersApi.logout()
    }
  }
}
</script>

<style lang="css">
</style>
