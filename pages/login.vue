<template>
  <div class="page">
    <div class="columns is-gapless">
      <div class="column is-one-third is-flex">
        <div class="px-5 py-5 login-container">
          <h1 class="title">LushCloset</h1>
          <h2 class="subtitle">Welcome back!</h2>

          <div class="card">
            <div class="card-content">
              <div
                v-if="form.error"
                class="notification is-danger form-error-notif"
                @click="form.error = null"
              >
                <button class="delete"></button>
                {{ form.error }}
              </div>

              <form class="mb-5" @submit.prevent="login">
                <div class="field">
                  <label class="label">Email</label>
                  <div class="control">
                    <input
                      id="email"
                      v-model="form.fields.email.value"
                      class="input"
                      type="text"
                      required
                    />
                  </div>

                  <p v-if="form.fields.email.error" class="help is-danger">
                    {{ form.fields.email.error }}
                  </p>
                </div>

                <div class="field">
                  <label class="label">Password</label>
                  <div class="control">
                    <input
                      id="password"
                      v-model="form.fields.password.value"
                      class="input"
                      type="password"
                      required
                    />
                  </div>

                  <p v-if="form.fields.password.error" class="help is-danger">
                    {{ form.fields.password.error }}
                  </p>

                  <p class="is-size-7">
                    <n-link to="/" no-prefetch>Forgot password?</n-link>
                  </p>
                </div>

                <button type="submit" class="button is-primary is-fullwidth">
                  Login
                </button>
              </form>

              <p class="has-text-centered">
                Don't have an account?
                <n-link to="/" no-prefetch>Sign up</n-link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="column is-hidden-mobile">
        <img class="splash-image" :src="splashImages[0]" />
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.columns
  display: flex
  height: 100vh

.splash-image
  height: 100%
  width: 100%
  background-size: cover
  background-position: bottom
  object-fit: cover

.login-container
  width: 100%
  max-width: 500px;
</style>

<script>
export default {
  async asyncData({ $axios }) {},
  data() {
    return {
      form: {
        error: null,
        fields: {
          email: {
            value: null,
            error: null,
          },
          password: {
            value: null,
            error: null,
          },
        },
      },
      splashImages: [
        require('../assets/images/marcus-loke-xXJ6utyoSw0-unsplash.jpg'),
        require('../assets/images/nick-de-partee-5DLBoEX99Cs-unsplash.jpg'),
      ],
    }
  },
  methods: {
    login() {
      this.form.error = null

      Object.keys(this.form.fields).map((k) => {
        this.form.fields[k].error = null
      })

      this.$auth
        .loginWith('local', {
          data: {
            email: this.form.fields.email.value,
            password: this.form.fields.password.value,
          },
        })
        .then((data) => {})
        .catch((error) => {
          if (error.response.data.error) {
            const errorData = error.response.data.error

            switch (errorData.type) {
              case 'invalidRequestError':
                if (errorData.code === 'bodyError') {
                  const fieldErrors = errorData.extra.details

                  fieldErrors.forEach((fieldError) => {
                    this.form.fields[fieldError.context.key].error =
                      fieldError.message
                  })
                }

                break

              case 'validationError':
                if (errorData.code === 'userNotFound') {
                  this.form.error = errorData.message
                }

                break

              default:
                break
            }
          }
        })
    },
  },
}
</script>
