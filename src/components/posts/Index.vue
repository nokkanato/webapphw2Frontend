<template>
      <el-col :span="3" :offset="3">
    <div id='card' v-for="post in posts" :key="post.id">
      <el-card  >
      <router-link id="title" :to="{ name: 'Posts.show', params: {id: post.id } }">
        <iccs340-post :post='post'></iccs340-post>
      </router-link>
      </el-card>
    </div>
  </el-col>

</template>

<script>
import PostsApi from '../../api/post.js'
import UsersApi from '@/api/users.js'
import router from '@/router'
export default {
  methods: {
    addPost () {
      router.push({ name: 'Posts.new' })
    },
    viewPost () {
      router.push({ name: 'Posts.index' })
    },
    logout () {
      UsersApi.logout()
    }
  },
  components: {
    Iccs340Post: require('./Post')
  },
  name: 'posts',
  data () {
    return {
      posts: null,
      error: null
    }
  },
  beforeRouteEnter (to, from, _next) {
    PostsApi.getPosts(_posts => {
      _next(vm => {
        vm.posts = _posts
      })
    })
  },
  watch: {
    $route () {
      PostsApi.getPosts(_posts => {
        this.posts = _posts
      })
    }
  }
}
</script>

<style scoped>
  .posts {
    padding: 0 10px;
  }
  #card {
    width: 100%;
    height: 1%;
    padding: 10%;
  }
  #title {
    text-align: left;
  }
  .el-card{
  height: 100px;
  width: 500px;
}
</style>
