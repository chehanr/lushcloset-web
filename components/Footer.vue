<template>
  <div class="footer">
    <div class="row has-text-centered">
      <a href="about" class="footer-links">About</a>
      <a href="mobile-app-invite" class="footer-links">Mobile App</a>
      <a href="contact-us" class="footer-links">Contact Us</a>
      <div class="company has-text-centered">
        {{ new Date().getFullYear() }} — <strong>LushCloset</strong>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.footer
  position: relative
  padding: 10px
  width: 100%
  background-color: yellowgreen
  color: white

.footer-links
  color: white
  padding: 10px

.footer strong
  color: white

.company
  text-align: right
  padding-top: 10px
</style>
