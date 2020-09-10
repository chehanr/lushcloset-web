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
          <ListingCard class="column is-one-third-desktop is-half is-narrow" />
          <ListingCard class="column is-one-third-desktop is-half is-narrow" />
          <ListingCard class="column is-one-third-desktop is-half is-narrow" />
          <ListingCard class="column is-one-third-desktop is-half is-narrow" />
          <ListingCard class="column is-one-third-desktop is-half is-narrow" />
          <ListingCard class="column is-one-third-desktop is-half is-narrow" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListingCard from '~/components/ListingCard'
import SearchCard from '~/components/SearchCard'
import NavCard from '~/components/NavCard'

export default {
  components: {
    ListingCard,
    SearchCard,
    NavCard,
  },
}
</script>
