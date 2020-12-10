<template>
  <div class="electrics-index">
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
      message: "Electrics!",
      electrics: {}
    };
  },
  created: function() {
    this.indexElectrics();
  },
  methods: {
    indexElectrics: function() {
      axios.get("/api/products").then((response) => {
        console.log("All Bows:", response.data);
        this.electrics = response.data.where;
      });
    }
  }
};
</script>