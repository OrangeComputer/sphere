<template>
  <div class="home">
    <div class="container is-fluid">
      <section class="hero">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              Welcome to Sphere 2.0
            </h1>
            <h2 class="subtitle">
              The Orange Computer Ticketing System
            </h2>
          </div>
        </div>
      </section>
      <template>
        <section>
          <b-tabs position="is-centered" type="is-boxed">
            <b-tab-item label="Quick Actions">
              <div class="tile is-ancestor">
                <div class="tile is-8 is-vertical is-parent">
                  <div class="tile is-child box">
                    <p class="title">Create Receipt</p>
                    <div class="columns">
                      <div class="column is-8">
                        <p>Create an order from here, the Receipt will then be added to the ticket tracker</p>
                      </div>
                      <div class="column">
                        <a class="button is-large" href="#/user-search">Start</a>
                      </div>
                    </div>
                  </div>
                  <div class="tile is-child box">
                    <p class="title">Checkout</p>
                    <div class="columns">
                      <div class="column is-8">
                        <p>From here you can checkout a customer and recieve payment for a good or service</p>
                      </div>
                      <div class="column">
                        <a class="button is-large">Start</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tile is-parent">
                </div>
              </div>
            </b-tab-item>
            <b-tab-item label="Insights">
              music
            </b-tab-item>
            <b-tab-item label=""></b-tab-item>
          </b-tabs>
        </section>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      msg: "Welcome to Sphere"
    };
  }
};
</script>