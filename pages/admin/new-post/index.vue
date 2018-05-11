<template>
  <div class="container">
    <h1>A BRAND NEW POST</h1>
    <PostForm @submit="submitPost"/>
  </div>
</template>

<script>
import axios from 'axios'
import PostForm from '@/components/Admin/AdminPostForm'

export default {
  layout: 'admin',
  components: {
    PostForm
  },
  methods: {
    async submitPost (post) {
      let { data } = await axios.post('https://simple-bloger.firebaseio.com/posts.json', post)
      console.log(data)
    }
  }
}
</script>
