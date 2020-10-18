<template>
  <div class="body">
    <Header />
    <GradientBackground />
    <div class="contact-info">
      Contact Us <br />Phone: XX XXXX XXXX <br />Email: lushcloset@email.com
    </div>
    <Footer />
  </div>
</template>

<style lang="sass" scoped>
.contact-info
  margin: 0
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
