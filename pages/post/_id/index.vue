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
import axios from 'axios'

export default {
  layout: 'admin',
  components: {
    Post
  },
  async asyncData ({ params }, callback) {
    let { data, status } = await axios.get(`https://simple-bloger.firebaseio.com/posts/${params.id}.json`)
    if (status == 200) {
      return {
        loadedPost: data
      }
    }
  }
}
</script>



