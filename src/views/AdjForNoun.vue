<template>
  <div class="sol">
    <h2>Map Page</h2>
    <p>
      <router-link to="/" class="next">Back to Station Locater</router-link>
    </p>

    <div class="results">
    </div>
    <spinner v-if="showSpinner"></spinner>
    <div class="map">

      <!-- GOOGLE MAP PLUG IN</p> -->
      <iframe
        :src="results.map_url"
        width="900"
        height="600"
        id="gmap_canvas"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        zoom=".00001"
      ></iframe>

      <br>

    </div>
    
    <div class="sunset"></div>
  </div>
</template>

<script>
import axios from "axios";
import CubeSpinner from "@/components/CubeSpinner";

export default {
  name: "Sol",
  data() {
    return {
      results: {
        map_url: "",
        google_url: "",
        showSpinner: false

      }
    };
  },
   mounted: function() {
    axios
      .get("https://api.wheretheiss.at/v1/satellites/25544", {})
      .then(response => {
        // 
          // "https://maps.google.com/maps?q=" +
          // response.data.latitude +
          // "," +
          // response.data.longitude;
        this.results.map_url =`https://maps.google.com/maps?q=${response.data.latitude},${response.data.longitude}&t=&z=3&ie=UTF8&iwloc=&output=embed`
          // "https://maps.google.com/maps?q=" +
          // response.data.latitude +
          // "," +
          // response.data.longitude +
          // "&t=&z=2&ie=UTF8&iwloc=&output=embed";
          
        console.log("here");
        // this.getLocationInfo();
      })
      .catch(error => {
        console.log(error);
        //this.errors.push(error);
      });
  }
  // mounted: function() {
  //   axios
  //     .get("https://api.wheretheiss.at/v1/satellites/25544", {})
  //     .then(response => {
  //       this.results.google_url =
  //         "https://maps.google.com/maps?q=" +
  //         response.data.latitude +
  //         "," +
  //         response.data.longitude;
  //       this.results.map_url =
  //         "https://maps.google.com/maps?q=" +
  //         response.data.latitude +
  //         "," +
  //         response.data.longitude +
  //         "&t=&z=2&ie=UTF8&iwloc=&output=embed";
          
  //       console.log("here");
  //       // this.getLocationInfo();
  //     })
  //     .catch(error => {
  //       console.log(error);
  //       //this.errors.push(error);
  //     });
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
  color: #2c3e50;
}
</style>
