<template>
  <div class="row">
    <div class="col-lg-4 col-md-6" v-for="i in 12" :key="i">
      <post-card
        :id="i"
        thumbnail=""
        title="Post title"
        previewText="Post Preview"></post-card>
    </div>
  </div>
</template>

<script>
import PostCard from '@/components/Posts/PostCard';

export default {
  components: {
    PostCard
  }
}
</script>

