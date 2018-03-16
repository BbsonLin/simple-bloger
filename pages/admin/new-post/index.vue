<template>
  <div class="container">
    <h1>A BRAND NEW POST</h1>
    <PostForm />
  </div>
</template>

<script>
import PostForm from '@/components/Admin/AdminPostForm'

export default {
  layout: 'admin',
  components: {
    PostForm
  }
}
</script>
