<template>
  <div class="uprights-index">
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
      message: "Uprights!",
      uprights: {}
    };
  },
  created: function() {
    this.indexUprights();
  },
  methods: {
    indexUprights: function() {
      axios.get("/api/products").then((response) => {
        console.log("All Uprights:", response.data);
        this.uprights = response.data.where;
      });
    }
  }
};
</script>