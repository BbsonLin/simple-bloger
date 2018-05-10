<template>
  <div class="blog-page">
    <HeaderCover class="text-white"></HeaderCover>
    <section class="container">
      <PostList :posts="loadedPosts"/>
    </section>
  </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'
import HeaderCover from '@/components/UI/AppHeaderCover'

export default {
  components: {
    PostList,
    HeaderCover
  },
  asyncData (context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          loadedPosts: [
            {
              id: 1,
              title: 'First Post',
              previewText: 'This is our first post',
              thumbnail: 'https://picsum.photos/400/300?random'
            },
            {
              id: 2,
              title: 'Second Post',
              previewText: 'This is our second post',
              thumbnail: 'https://picsum.photos/400/300?random'
            }
          ]
        })
      }, 1500)
      // Throw out an error
      // reject(new Error())
    }).then(data => {
      return data
    }).catch(err => {
      context.error(err)
    })
  }
}
</script>

<style lang="scss">
</style>
