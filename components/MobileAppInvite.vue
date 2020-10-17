<template>
  <div class="invite-container">
    <div class="columns is-gapless">
      <div class="column">
        <img
          class="mobile-app-preview"
          src="~/assets/images/Mobile-App-Preview-1.png"
        />
      </div>
      <div class="column">
        <div class="invite-description">
          <strong style="color: white"
            >Try Lushcloset on Android and iOS</strong
          >
        </div>
        <a href="https://play.google.com/store/apps?hl=en_AU"
          ><img
            class="google-play-store-badge-invite"
            src="~/assets/icons/google-play-store-badge.png"
        /></a>
        <a href="https://www.apple.com/au/ios/app-store/"
          ><img
            class="ios-app-store-badge-invite"
            src="~/assets/icons/ios-app-store-badge.png"
        /></a>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.columns
  margin: auto
  width: 800px

.mobile-app-preview
  height: 100%
  width: 80%

.invite-description
  margin-top: 150px
  color: white
  font-size: 36px
  padding: 10px

.google-play-store-badge-invite
  height: 85px
  width: 250px
  padding: 10px

.ios-app-store-badge-invite
  height: 85px
  width: 250px
  padding: 10px
</style>
