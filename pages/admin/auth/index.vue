<template>
  <div class="container">
    <button @click="show = !show" class="btn btn-primary">Toggle</button>
    <div class="row justify-content-center">
      <div class="col-md-6 col-lg-4">
        <transition name="fade" mode="out-in"
          enter-active-class="animated flipInY"
          leave-active-class="animated flipOutY">
          <AuthForm v-if="show"/>
        </transition>
        <transition name="fade" mode="out-in"
          enter-active-class="animated flipInY"
          leave-active-class="animated flipOutY">
          <AuthForm formName="Register" v-if="!show"/>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import AuthForm from '@/components/Admin/AuthForm'

export default {
  layout: 'admin',
  components: {
    AuthForm
  },
  data () {
    return {
      show: true
    }
  }
}
</script>

