<template>
  <div class="nav-card">
    <div class="box">
      <div class="level">
        <div class="level-left is-hidden-mobile">
          <div class="level-item">
            <div v-if="this.$auth.loggedIn" class="media">
              <div class="media-left">
                <figure class="image is-32x32">
                  <img class="is-rounded" :src="getAvatarUrl()" alt="Avatar" />
                </figure>
              </div>

              <div class="media-content">
                <div class="content">
                  <p class="is-size-7 has-text-weight-medium">
                    {{ this.$auth.user.name }}
                    <br />
                    <small class="has-text-weight-normal">
                      {{ this.$auth.user.email }}
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="level-right">
          <div class="level-item">
            <div class="buttons">
              <button
                v-if="this.$auth.loggedIn"
                class="button is-primary is-light is-small is-rounded is-hidden-tablet"
              >
                <span class="icon">
                  <img src="~assets/icons/user.svg" alt="Profile" />
                </span>
              </button>

              <button class="button is-light is-small is-rounded">
                <span class="icon">
                  <img src="~assets/icons/message-square.svg" alt="Messages" />
                </span>
              </button>

              <button
                v-if="this.$auth.loggedIn"
                class="button is-light is-small is-rounded"
                @click="logout"
              >
                <span class="icon">
                  <img src="~assets/icons/log-out.svg" alt="Log out" />
                </span>
              </button>

              <n-link
                v-if="!this.$auth.loggedIn"
                class="button is-light is-small is-rounded"
                to="/login"
                prefetch
              >
                <span class="icon">
                  <img src="~assets/icons/log-in.svg" alt="Log in" />
                </span>
              </n-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.nav-card {
  padding: 4px;
}

@media screen and (max-width: 768px) {
  .box {
    .level-right {
      margin-top: 0;
    }
  }
}
</style>

<script>
export default {
  methods: {
    getAvatarUrl() {
      let avatarUrl = require('../assets/images/avatar-default.png')

      if (this.$auth.loggedIn) {
        const user = this.$auth.user

        if (user.avatar && user.avatar.file && user.avatar.file.links) {
          const smallestImage = user.avatar.file.links.reduce(
            (pLink, cLink) => {
              return pLink.size < cLink.size ? pLink : cLink
            }
          )

          avatarUrl = smallestImage.url
        }
      }

      return avatarUrl
    },
    async logout() {
      await this.$auth.logout()
    },
  },
}
</script>
