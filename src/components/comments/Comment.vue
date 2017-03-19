<template>
<el-col :span="12" :offset="3">
  <div class="comment">
      <div class="md-list-text-container">
        <h4 id='email'> from : {{ comment.user.email }}</h4>
        <h4 id='content'> comment : {{ comment.content }}</h4>
      </div>
  </div>
</el-col>
</template>

<script>

export default {
  name: 'comment',
  props: {
    comment: {
      type: Object,
      required: false,
      default: {}
    }
  }
}
</script>

<style scoped>
#email, #content {
  text-align: left;

}
  .md-list-item {
    padding-left: 40px;
  }
</style>
