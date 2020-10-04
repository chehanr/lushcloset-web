<template>
  <div class="listing-card">
    <div class="box">
      <div class="media mb-3">
        <div class="media-left">
          <figure class="image is-32x32 is-square">
            <img
              class="is-rounded"
              :src="
                userAvatarUrl
                  ? userAvatarUrl
                  : require('~/assets/images/avatar-default.png')
              "
              alt="Avatar"
            />
          </figure>
        </div>

        <div class="media-content">
          <div class="content">
            <p class="is-size-7 has-text-weight-medium">
              {{ listing.createdBy.name }} is
              <strong
                v-if="listing.listingType === 'sell'"
                class="is-uppercase"
              >
                selling
              </strong>
              <strong
                v-if="listing.listingType === 'rent'"
                class="is-uppercase"
              >
                renting
              </strong>
              <br />
              <small class="has-text-weight-normal">
                {{
                  $dateFns.formatDistanceToNow(
                    $dateFns.parseJSON(listing.createdAt),
                    { addSuffix: true }
                  )
                }}
              </small>
            </p>
          </div>
        </div>
      </div>

      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <figure class="tile is-child image is-square">
            <img
              :src="
                listingImages[0]
                  ? listingImages[0]
                  : require('~/assets/images/blank.png')
              "
              alt="Listing image"
            />
          </figure>
        </div>
        <div
          v-if="listingImages.length > 1"
          class="tile is-4 is-vertical is-parent is-hidden-mobile"
        >
          <figure class="tile is-child image is-square">
            <img
              :src="
                listingImages[1]
                  ? listingImages[1]
                  : require('~/assets/images/blank.png')
              "
              alt="Listing image"
            />
          </figure>
          <figure class="tile is-child image is-square">
            <img
              :src="
                listingImages[2]
                  ? listingImages[2]
                  : require('~/assets/images/blank.png')
              "
              alt="Listing image"
            />
          </figure>
        </div>
      </div>

      <p class="is-size-4">
        <strong>{{ listing.title }}</strong>
      </p>

      <p class="is-size-7">
        <small class="is-uppercase has-text-weight-medium">
          {{ listing.approximateLocation.formattedAddress }}
        </small>
      </p>

      <p class="is-size-7 my-3">
        {{ listing.shortDescription }}
      </p>

      <p
        class="is-size-7 is-family-monospace is-uppercase has-text-weight-medium"
      >
        {{ metaData }}
      </p>

      <div class="level mt-3">
        <div class="level-left">
          <div class="level-item">
            <div class="buttons are-small">
              <button class="button is-primary is-light">
                <span class="icon">
                  <img src="~assets/icons/external-link.svg" alt="Enquire" />
                </span>
                <span>Enquire</span>
              </button>
              <button class="button is-info is-light">
                <span class="icon">
                  <img src="~assets/icons/save.svg" alt="Save" />
                </span>
                <span>Save</span>
              </button>
            </div>
          </div>
        </div>

        <div class="level-right">
          <div class="level-item">
            <div class="buttons are-small">
              <button class="button is-warn is-light">
                <span class="icon">
                  <img src="~assets/icons/flag.svg" alt="Enquire" />
                </span>
                <span>Report</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.listing-card {
  padding: 4px;
}
</style>

<script>
export default {
  props: {
    listing: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      userAvatarUrl: null,
    }
  },
  computed: {
    metaData() {
      let _str = ''

      if (!this.listing.metaData) {
        return _str
      }

      const _arr = []

      Object.keys(this.listing.metaData).forEach((key) => {
        _arr.push(`${key}: ${this.listing.metaData[key]}`)
      })

      _str = _arr.join(' | ')

      return _str
    },
    listingImages() {
      const _arr = []

      this.listing.images.forEach((image) => {
        if (image.file.links) {
          const smallestImage = image.file.links.reduce((pLink, cLink) => {
            return pLink.size < cLink.size ? pLink : cLink
          })

          _arr.push(smallestImage.url)
        }
      })

      return _arr
    },
  },
  async created() {
    await this.getAvatarUrl(this.listing.createdBy.id)
  },
  methods: {
    async getAvatarUrl(creatorId) {
      let url = null

      const user = await this.$axios
        .get(`/api/v1_0/users/${creatorId}`)
        .then((res) => res.data.data)

      if (user.avatar && user.avatar.file && user.avatar.file.links) {
        const smallestImage = user.avatar.file.links.reduce((pLink, cLink) => {
          return pLink.size < cLink.size ? pLink : cLink
        })

        url = smallestImage.url
      }

      this.userAvatarUrl = url
    },
  },
}
</script>
