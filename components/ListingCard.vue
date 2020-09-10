<template>
  <div class="listing-card">
    <div class="box">
      <div class="media mb-3">
        <div class="media-left">
          <figure class="image is-32x32">
            <img
              class="is-rounded"
              src="https://bulma.io/images/placeholders/128x128.png"
            />
          </figure>
        </div>

        <div class="media-content">
          <div class="content">
            <p class="is-size-7 has-text-weight-medium">
              John Doe is <strong class="is-uppercase">renting</strong>
              <br />
              <small class="has-text-weight-normal">31 minutes ago</small>
            </p>
          </div>
        </div>
      </div>

      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <figure class="tile is-child image is-square">
            <img src="https://bulma.io/images/placeholders/128x128.png" />
          </figure>
        </div>
        <div class="tile is-4 is-vertical is-parent is-hidden-mobile">
          <figure class="tile is-child image is-square">
            <img src="https://bulma.io/images/placeholders/128x128.png" />
          </figure>
          <figure class="tile is-child image is-square">
            <img src="https://bulma.io/images/placeholders/128x128.png" />
          </figure>
        </div>
      </div>

      <p class="is-size-4">
        <strong>Example product</strong>
      </p>

      <p class="is-size-7">
        <small class="is-uppercase has-text-weight-medium">
          Hawthorn Melborne, Victoria
        </small>
      </p>

      <p class="is-size-7 my-3">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium qui...
      </p>

      <p
        class="is-size-7 is-family-monospace is-uppercase has-text-weight-medium"
      >
        size: small | condition: new
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
