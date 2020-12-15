<template>
  <div class="uprights-index">
    <h1>{{ uprights.length}}</h1>

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

    <!-- cards -->
    <div class="container-fluid">
      <div class="row row-cols-2 row-cols-md-4 g-4" >
      <div class="col" v-for="upright in uprights">
        <div class="card h-100">
          <img src="../../public/images/kay_bass_viol_1954_01.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{{ upright.year  }}  {{ upright.name }} {{ upright.model }}</h5>
            <p class="card-text">
              {{ upright.price}}
            </p>
          </div>
        </div>
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
      uprights: [],
    };
  },
  created: function () {
    this.indexUprights();
  },
  methods: {
    indexUprights: function () {
      axios.get("/api/products").then((response) => {
        console.log("All Uprights:", response.data);
        this.uprights = response.data.filter(
          (upright) => upright.category === "Upright"
        );
      });
    },
  },
};
</script>
