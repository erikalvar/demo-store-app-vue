<template>
  <div class="accessories-index">
    <h1>{{ message }}</h1>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      message: "Accessories!",
      accessories: {}
    };
  },
  created: function() {
    this.indexAccessories();
  },
  methods: {
    indexAccessories: function() {
      axios.get("/api/products").then((response) => {
        console.log("All Products:", response.data);
        this.accessories = response.data.where;
      });
    }
  }
};
</script>