<template>
  <div class="body">
    <LoginHeader />
    <div class="splash-background">
      <MobileAppInvite />
    </div>
    <Footer />
  </div>
</template>

<style lang="sass" scoped>
.invite-container
  margin: auto
  position: relative
  top: 15%

.splash-background
  background: linear-gradient(280deg, #f8ff00 0%, #3ad59f 100%)
  height: 94vh
  top: 0
  left: 0
</style>

<script>
import LoginHeader from '~/components/Header'
import Footer from '~/components/Footer'
import MobileAppInvite from '~/components/MobileAppInvite'

export default {
  components: {
    LoginHeader,
    Footer,
    MobileAppInvite,
  },
}
</script>
