<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6 col-lg-4">
        <transition mode="out-in"
          enter-active-class="animated flipInY"
          leave-active-class="animated flipOutY">
          <!-- Use "key" to let Vuejs know that the same component
               shouldn't be reused -->
          <AuthForm 
            key="login"
            v-if="showLogin"
            @flip="changeMode"/>
          <AuthForm
            key="register"
            formName="Register"
            v-else
            @flip="changeMode"/>
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
      showLogin: true
    }
  },
  methods: {
    changeMode () {
      this.showLogin = !this.showLogin
    }
  }
}
</script>

