<template>
  <div class="cantainer">
    <Post
      :id="loadedPost.id"
      :title="loadedPost.title"
      :previewText="loadedPost.previewText"
      :thumbnail="loadedPost.thumbnail"/>
  </div>
</template>

<script>
import Post from '@/components/Posts/Post'

export default {
  layout: 'admin',
  components: {
    Post
  },
  asyncData (context, callback) {
    setTimeout(() => {
      callback(null, {
        loadedPost: {
          id: 1,
          title: 'First Post',
          previewText: 'This is our first post',
          thumbnail: 'https://picsum.photos/400/300?random'
        }
      })
    }, 1000)
  }
}
</script>



