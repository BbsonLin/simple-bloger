<template>
  <div class="container">
    <PostForm :post="loadedPost"/>
  </div>
</template>

<script>
import PostForm from '@/components/Admin/AdminPostForm'

export default {
  layout: 'admin',
  components: {
    PostForm
  },
  data () {
    return {
      loadedPost: {
        author: 'Bobson Lin',
        title: 'The First Post',
        content: 'The First Post with content',
        thumbnailLink: ''
      }
    }
  }
}
</script>

