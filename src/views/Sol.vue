<template>
  <div class="sol">
    <h2>Solar Site</h2>

    <form v-on:submit.prevent="findStation">
      <p></p>
    </form>
    <p>Where is the International Space Station right now?</p>
    <!-- <spinner v-if="showSpinner"></spinner> -->

    <div class="results">
      <spinner v-if="showSpinner"></spinner>
      <p>Longitude: {{results.longitude}}</p>
      <p>Latitude:{{results.latitude}}</p>
      <p>How's the Weather there? {{results.visibility}}</p>
    </div>

    <div class="map">
      <p>
        <router-link to="/adjfornoun" class="next">See It on a Map!</router-link>
      </p>
    </div>

    <div class="sunset"></div>
  </div>
</template>

<script>
import axios from "axios";
require("vue2-animate/dist/vue2-animate.min.css");
import CubeSpinner from "@/components/CubeSpinner";

export default {
  name: "Sol",
  data() {
    return {
      results: null,
      showSpinner: false

    };
  },
  mounted: function() {
    //to start showing the spinner
    this.showSpinner = true;
    this.results = null;
    axios
      .get("https://api.wheretheiss.at/v1/satellites/25544", {})
      .then(response => {
        //turn off the spinner
        this.showSpinner = false;
        this.results = response.data;
      })
      .catch(error => {
        //turn of the spinner
        this.showSpinner = false;
        this.errors.push(error);
      });
  }
  //   components: {
  //   spinner: CubeSpinner,
  // }
};
</script>

<style scoped>
.results {
  text-align: center;
}
.map {
  text-align: center;
}
.sol {
  font-size: 1.4rem;
  background-color: rgba(209, 208, 221, 0.3);
  position: center;
  line-height: 1.5;
  display: inline-block;
  vertical-align: middle;
  border: 10 px solid #42b983;
  border-radius: 25px;
   border-style: solid;
    border-color:  #42b983;
  border-width: 1px;
   padding: 25px 50px 25px 50px;
}

input[type="text"] {
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #333;
  width: 300px;
  font-size: 1.4rem;
  color: #2c3e50;
  font-weight: 300;
  background: rgba(0, 0, 0, 0.02);
  padding: 0.5rem;
}
button {
  background: #333;
  padding: 0.5rem;
  font-weight: 300;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 1.4rem;
}
h1,
h2 {
  font-weight: normal;
}

ul.results {
  list-style-type: none;
  padding: 0;
}

.results li {
  display: inline-block;
  margin: 10px;
  border: solid 1px #333;
  padding: 0.5rem;
  width: 200px;
  min-height: 100px;
  color: #fff;
  background: rgba(0, 0, 0, 0.7);
}
ul.errors {
  list-style-type: none;
}
.errors li {
  border: 1px solid red;
  color: red;
  padding: 0.5rem;
  margin: 10px 0;
}

a {
  /* color: #42b983; */
  color: #2c3e50;
}
</style>
