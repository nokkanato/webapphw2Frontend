<template>
      <el-col class="new-post" :span="12" :offset="3">
      <h2 id="newpost" class="md-inset">New Post</h2>
        <div id="title">
          <div>
            <label>Title</label>
            <el-input v-model="post.name" placeholder="Title"></el-input>
          </div>
        </div>

        <div id="content">
          <div>
            <label>Content</label>
            <el-input v-model="post.content" placeholder="Content"></el-input>
          </div>
        </div>
        <span style="flex: 1"></span>
        <el-button class="md-raised md-primary" @click.native="createPost">submit</el-button>
        <span style="flex: 1"></span>
    </el-col>

</template>

<script>
import PostsApi from '../../api/post.js'
import router from '../../router'

export default {
  name: 'new-post',
  data () {
    return {
      post: {
        name: '',
        content: ''
      }
    }
  },
  methods: {
    createPost () {
      PostsApi.createPost(this.post,
        function (_post) {
          router.push({ name: 'Posts.index' })
        }
      )
    }
  }
}
</script>

<style scoped>
#newpost {
  text-align: left;
}
#title,#content {
  padding: 5%;
}

</style>
