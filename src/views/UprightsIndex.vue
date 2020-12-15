<template>
  <div class="uprights-index">
    <h1>{{ products.length }}</h1>

    <!-- hero -->
    <div class="bg-light p-5 rounded-lg m-3">
      <h1 class="display-4">{{ message }}</h1>
      <p class="lead">
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <hr class="my-4" />
      <p>
        It uses utility classes for typography and spacing to space content out
        within the larger container.
      </p>
      <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </div>
    <!-- end hero -->

    <!-- cards -->
    <div class="container-fluid">
      <div class="row row-cols-2 row-cols-md-4 g-4">
        <div class="col" v-for="product in products">
          <router-link v-bind:to="`/products/${product.id}`">
            <div class="card h-100">
              <img
                src="../../public/images/kay_bass_viol_1954_01.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">
                  {{ product.year }} {{ product.name }} {{ product.model }}
                </h5>
                <p class="card-text">${{ product.price }}</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <!-- end cards -->
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Uprights!",
      products: [],
    };
  },
  created: function () {
    this.indexProducts();
  },
  methods: {
    indexProducts: function () {
      axios.get("/api/products").then((response) => {
        console.log("All Uprights:", response.data);
        this.products = response.data.filter(
          (product) => product.category === "Upright"
        );
      });
    },
  },
};
</script>
