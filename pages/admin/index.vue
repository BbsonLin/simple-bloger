<template>
  <div class="admin-page">
    <HeaderCover class="text-white">
      <h1 slot="title">HOME</h1>
    </HeaderCover>
    <section class="new-post d-flex justify-content-center">
      <button class="btn btn-outline-info" @click="$router.push('/admin/new-post')">Create Post</button>
    </section>
    <hr>
    <!-- Existing Posts Section -->
    <section class="existing-posts container d-flex flex-column align-items-center">
      <h1>Existing Posts</h1>
      <PostList />
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
  }
}
</script>

