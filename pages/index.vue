<template>
  <div class="home-page">
    <HeaderCover class="text-white">
      <h1 slot="title">HOME</h1>
    </HeaderCover>
    <section class="container">
      <PostList :posts="loadedPosts" />
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PostList from '@/components/Posts/PostList'
import HeaderCover from '@/components/UI/AppHeaderCover'

export default {
  components: {
    PostList,
    HeaderCover
  },
  computed: {
    ...mapGetters({
      loadedPosts: 'getLoadedPosts'
    })
  }
}
</script>

<style lang="scss">
</style>
