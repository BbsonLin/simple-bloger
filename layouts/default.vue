<template>
  <div>
    <TopNavbar class="navbar-dark bg-transparent fixed-top">
      <nuxt-link class="navbar-brand" to="/" slot="brand">Simple Bloger</nuxt-link>

      <button class="navbar-toggler"
              slot="toggle"
              @click="toggle">
        <span class="navbar-toggler-icon"></span>
      </button>

      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/post">Blog</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/about">About</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/admin">Admin</nuxt-link>
        </li>
      </ul>
    </TopNavbar>
    <SideNavbar :show="showSideNavbar" @close="showSideNavbar=false">
      <ul class="navbar-nav ml-3 mt-3">
        <li class="nav-item" @click="toggle">
          <nuxt-link class="nav-link" to="/post">Blog</nuxt-link>
        </li>
        <li class="nav-item" @click="toggle">
          <nuxt-link class="nav-link" to="/about">About</nuxt-link>
        </li>
        <li class="nav-item" @click="toggle">
          <nuxt-link class="nav-link" to="/admin">Admin</nuxt-link>
        </li>
      </ul>
    </SideNavbar>
    <nuxt/>
  </div>
</template>

<script>
import TopNavbar from '@/components/Navigation/TopNavbar'
import SideNavbar from '@/components/Navigation/SideNavbar'

export default {
  components: {
    TopNavbar,
    SideNavbar
  },
  data () {
    return {
      showSideNavbar: false
    }
  },
  methods: {
    toggle () {
      this.showSideNavbar = !this.showSideNavbar
    }
  }
}
</script>


<style>
</style>
