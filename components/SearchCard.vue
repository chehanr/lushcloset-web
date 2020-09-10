<template>
  <div class="me-card">
    <div class="box">
      <div class="columns is-multiline">
        <div class="column is-full">
          <div class="field">
            <div class="control has-icons-left">
              <input class="input is-small" type="text" autofocus />

              <span class="icon is-small is-left">
                <img src="~assets/icons/search.svg" alt="Search" />
              </span>
            </div>
          </div>
        </div>

        <div class="column is-full is-hidden-touch">
          <div class="columns is-multiline">
            <div class="column is-full">
              <p class="is-size-7 is-uppercase has-text-weight-light mb-1">
                Filters
              </p>

              <div class="buttons are-small">
                <button class="button is-info is-light">
                  <span class="icon">
                    <img src="~assets/icons/compass.svg" alt="Location" />
                  </span>
                  <span>Hawthorn Melborne, Victoria</span>
                </button>
              </div>
            </div>

            <div class="column is-full">
              <div class="field">
                <label
                  class="label is-size-7 is-uppercase has-text-weight-light"
                >
                  Categories
                </label>
                <div class="control">
                  <div class="select is-small is-fullwidth">
                    <select>
                      <option>All</option>
                      <option></option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.me-card {
  padding: 4px;
}
</style>
