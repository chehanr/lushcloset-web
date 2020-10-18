<template>
  <div class="body">
    <Header />
    <GradientBackground />
    <div class="about-info">
      <h1>About LushCloset</h1>
      LushCloset is a peer-to-peer application which allows you to rent, buy
      sell pieces of clothing quickly and easily.
    </div>
    <Footer />
  </div>
</template>

<style lang="sass" scoped>
.about-info
  margin: 0 auto
  position: absolute
  top: 25%
  left: 15%
  color: white
  font-size: 24px
</style>

<script>
import Header from '~/components/Header'
import GradientBackground from '~/components/GradientBackground'
import Footer from '~/components/Footer'

export default {
  components: {
    Header,
    GradientBackground,
    Footer,
  },
  auth: 'guest',
}
</script>
