<template>
  <div class="bows-index">
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
      message: "Bows!",
      bows: {}
    };
  },
  created: function() {
    this.indexBows();
  },
  methods: {
    indexBows: function() {
      axios.get("/api/products").then((response) => {
        console.log("All Bows:", response.data);
        this.bows = response.data.where;
      });
    }
  }
};
</script>