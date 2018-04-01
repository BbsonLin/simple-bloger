<template>
  <div>
    <div class="card mt-5">
      <h5 class="card-header">{{ formName }}</h5>
      <div class="card-body">
        <form @submit.prevent>
          <div class="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
          </div>
          <div class="d-flex justify-content-between align-items-center">
            <button type="submit" class="btn btn-primary">{{ formName }}</button>
            <a href="javascript:void(0)" @click="$emit('flip')">Change to {{ anotherForm }}</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    formName: {
      type: String,
      default: 'Login'
    }
  },
  computed: {
    anotherForm () {
      if (this.formName == 'Login') {
        return 'Register'
      } else {
        return 'Login'
      }
    }
  }
}
</script>
