<template>

    <el-col class="post" :span="12" :offset="3">

    <el-card :span="4" :offset="0" id="card">


      <iccs340-post :post='post'></iccs340-post>
  </el-card>

      <div v-for="comment in comments">
      <iccs340-comment :comment='comment'></iccs340-comment>
    </div>
    <Iccs340NewComment :post='post'></Iccs340NewComment>
</el-col>
</template>

<script>
import PostsApi from '../../api/post.js'
import CommentsApi from '../../api/comments.js'

export default {
  name: 'post',
  components: {
    Iccs340Post: require('./Post'),
    Iccs340Comment: require('../comments/Comment'),
    Iccs340NewComment: require('../comments/New')
  },
  data () {
    return {
      post: {},
      comments: [],
      error: null
    }
  },
  created () {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData()
  },
  watch: {
    // call again the method if the route changes
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      PostsApi.getPost(this.$route.params.id, _post => {
        this.post = _post
        CommentsApi.getComments(_post.id, _comments => {
          this.comments = _comments
        })
      })
    }
  }
}
</script>


<style scoped>

.el-card{
height: 100px;
width: 500px;
}

</style>
