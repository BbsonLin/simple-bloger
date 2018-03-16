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
          <button type="submit" class="btn btn-primary">{{ formName }}</button>
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
  }
}
</script>
