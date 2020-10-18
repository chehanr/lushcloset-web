<template>
  <div class="page">
    <div class="columns">
      <div class="column is-one-fifth has-background-light is-hidden-touch">
        <div class="columns is-multiline py-3">
          <SearchCard class="column is-full" />
        </div>
      </div>

      <div class="column">
        <div class="columns is-multiline px-3 py-3">
          <NavCard class="column is-full" />
          <SearchCard class="column is-full is-hidden-desktop" />
          <ListingCard
            v-for="listing in listings"
            :key="listing.id"
            :listing="listing"
            class="column is-one-third-desktop is-half is-narrow"
          />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import ListingCard from '~/components/ListingCard'
import SearchCard from '~/components/SearchCard'
import NavCard from '~/components/NavCard'
import Footer from '~/components/Footer'

export default {
  components: {
    ListingCard,
    SearchCard,
    NavCard,
    Footer,
  },
  async fetch() {
    const queries = this.$route.query

    if (queries.search) {
      queries.titleiLike = queries.search

      delete queries.search
    }

    if (queries.category) {
      if (Array.isArray(queries.category)) {
        queries.category.forEach((query, index) => {
          queries[`categoryRefId[${index}]`] = query
        })
      } else {
        queries['categoryRefId[]'] = queries.category
      }

      delete queries.category
    }

    const queryString = Object.keys(queries)
      .map((key) => key + '=' + queries[key])
      .join('&')

    await this.$axios.get(`/api/v1_0/listings?${queryString}`).then((res) => {
      this.listings = res.data.data.listings
    })
  },
  asyncData({ query, $axios }) {
    return $axios.get(`/api/v1_0/listings`).then((res) => {
      return { listings: res.data.data.listings }
    })
  },
  watchQuery: [
    'search',
    'priceGte',
    'priceLte',
    'category',
    'orderBy',
    'filterBy',
    'skip',
    'take',
  ],
}
</script>
