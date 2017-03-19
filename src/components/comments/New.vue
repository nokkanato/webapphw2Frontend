<template>
  <el-col class="new-post" :span="12" :offset="3">

    <el-form>
      <el-form-item>
        <div >
            <label id='addcomment'>Add Comment</label>
            <el-input v-model="comment.content" placeholder="comment"></el-input>
        </div>
      </el-form-item>
        <span style="flex: 1"></span>
        <el-button class="md-raised md-primary" @click.native="createComment">post</el-button>
        <span style="flex: 1"></span>
      </el-form>
</el-col>
</template>

<script>
import CommentsApi from '../../api/comments.js'
import router from '../../router'

export default {
  name: 'new-comment',
  data () {
    return {
      comment: {
        content: ''
      }
    }
  },
  props: {
    post: {
      type: Object,
      required: false,
      default: {}
    }
  },
  methods: {
    createComment () {
      var postId = this.post.id
      var content = this.comment.content
      this.comment.content = ''
      CommentsApi.createComment(postId, content,
        function (_comment) {
          console.log(_comment)
          router.push({ name: 'Posts.show', params: { post_id: postId }, query: { t: new Date() } })
        }
      )
    }
  }
}
</script>

<style scoped>
.md-list-item {
  padding-left: 40px;
}
#addcomment {
  font-weight: bold;
}
</style>
