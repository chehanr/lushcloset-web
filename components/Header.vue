<template>
  <div class="header">
    <a v-if="this.$auth.loggedIn" href="/" class="links home-link">Home</a>
    <a
      v-if="this.$auth.loggedIn"
      href="/login"
      class="links logout-link"
      @click="logout"
      >Logout</a
    >
    <a v-if="!this.$auth.loggedIn" href="/login" class="links login-link"
      >Login</a
    >
  </div>
</template>

<style lang="sass" scoped>
.header
  margin: 25px
  position: absolute

.links
  color: white
  padding: 10px

.login-link, .logout-link
  border-style: solid
</style>

<script>
export default {
  methods: {
    async logout() {
      await this.$auth.logout()
    },
  },
}
</script>
