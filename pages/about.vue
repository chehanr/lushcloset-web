<template>
  <div class="body">
    <Header />
    <div class="splash-background">
      <div class="about-info">
        <h1>About LushCloset</h1>
        LushCloset is a peer-to-peer application which allows you to rent, buy
        and sell pieces of clothing quickly and easily.
      </div>
    </div>
    <Footer />
  </div>
</template>

<style lang="sass" scoped>
.splash-background
  background: linear-gradient(280deg, #f8ff00 0%, #3ad59f 100%)
  height: 94vh
  top: 0
  left: 0

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
import Footer from '~/components/Footer'

export default {
  components: {
    Header,
    Footer,
  },
}
</script>
