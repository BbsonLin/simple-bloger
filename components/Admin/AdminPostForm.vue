<template>
  <form @submit.prevent>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="inputAuthor">Author Name</label>
        <input type="text" class="form-control" id="inputAuthor" v-model="post.author">
      </div>
      <div class="form-group col-md-6">
        <label for="inputTitle">Title</label>
        <input type="text" class="form-control" id="inputTitle" v-model="post.title">
      </div>
    </div>
    <div class="form-group">
      <label for="inputContent">Content</label>
      <textarea class="form-control" id="inputContent" rows="10" v-model="post.content"></textarea>
    </div>
    <div class="form-group">
      <label>Thumbnail</label>
      <input type="file" class="form-control" @change="onFileSelected">
    </div>
    <div>
      <button class="btn btn-primary mr-2" @click="onSave">Save</button>
      <button class="btn btn-warning" @click="onCancel">Cancel</button>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default () {
        return {
          author: '',
          title: '',
          content: '',
          thumbnail: ''
        }
      }
    }
  },
  methods: {
    onSave () {
      // Save the post
      console.log('Save the post', this.post)
      this.$emit('submit', this.post)
    },
    onCancel () {
      // Go back
      this.$router.push('/admin')
    },
    onFileSelected (file) {
      console.log()
    }
  }
}
</script>
