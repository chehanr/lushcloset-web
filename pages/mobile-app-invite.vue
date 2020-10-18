<template>
  <div class="body">
    <Header />
    <GradientBackground />
    <MobileAppInvite />
    <Footer />
  </div>
</template>

<style lang="sass" scoped>
.wrapper
  min-height: 100%

.invite-container
  margin: auto
  position: absolute
  top: 15%
  left: 30%
  max-width: 100%
  height: auto
</style>

<script>
import Header from '~/components/Header'
import GradientBackground from '~/components/GradientBackground'
import Footer from '~/components/Footer'
import MobileAppInvite from '~/components/MobileAppInvite'

export default {
  components: {
    Header,
    GradientBackground,
    Footer,
    MobileAppInvite,
  },
  auth: 'guest',
}
</script>
