<template>
  <div class="products-show">
    <h1>{{ product }}</h1>

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

    <!-- product container -->
    <div class="container">
      <div class="row align-items-start">
        <!-- left column -->
        <div class="col">
          <img src="../../public/images/kay_bass_viol_1954_01.jpg" class="card-img-top" alt="..." />
        </div>
        <!-- right column -->
        <div class="col">
          <h1>{{ product.year }} {{ product.name }} {{ product.model }}</h1>
          <p>{{ product.description}}</p>
          <p>{{ product.specs}}</p>
          <p>${{ product.price}}</p>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
    <!-- end product container -->
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
