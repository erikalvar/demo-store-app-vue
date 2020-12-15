<template>
  <div class="products-show">
    <h1>{{ product }}</h1>

    <!-- hero -->
    <div class="bg-light p-5 rounded-lg m-3">
      <h1 class="display-4">{{ message}}</h1>
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

  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Product Show!",
      product: [],
    };
  },
  created: function () {
    this.productsShow();
  },
  methods: {
    productsShow: function () {
      axios.get(`/api/products/${this.$route.params.id}`).then((response) => {
        console.log("Product:", response.data);
        this.product = response.data;
      });
    },
  },
};
</script>
