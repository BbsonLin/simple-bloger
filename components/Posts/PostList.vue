<template>
  <div class="row">
    <div class="col-lg-4 col-md-6" v-for="post in posts" :key="post.id">
      <post-card
        :id="post.id"
        :is-admin="isAdmin"
        :thumbnail="post.thumbnail"
        :title="post.title"
        :previewText="post.previewText"></post-card>
    </div>
  </div>
</template>

<script>
import PostCard from '@/components/Posts/PostCard';

export default {
  components: {
    PostCard
  },
  props: {
    posts: Array,
    isAdmin: {
      type: Boolean,
      default: false
    }
  }
}
</script>

