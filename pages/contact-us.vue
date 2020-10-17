<template>
  <div class="body">
    <LoginHeader />
    <div class="splash-background">
      <div class="contact-info">
        Contact Us <br />Phone: XX XXXX XXXX <br />Email: lushcloset@email.com
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

.contact-info
  margin: 0
  position: absolute
  top: 25%
  left: 15%
  color: white
  font-size: 24px
</style>

<script>
import LoginHeader from '~/components/Header'
import Footer from '~/components/Footer'

export default {
  components: {
    LoginHeader,
    Footer,
  },
}
</script>
