<template>
    <el-col class="post" :span="12" :offset="8">

      <el-form >
        <el-form-item>
        <i class="el-icon-edit"></i>


        <span>{{ post.name }}</span>
        <p>{{ post.content }}</p>

        <br><br>
      </el-form-item>
    </el-form >
  </el-col>


</template>

<script>

export default {
  name: 'post',
  props: {
    post: {
      type: Object,
      required: false,
      default: {}
    }
  }
}
</script>

<style scoped>

</style>
