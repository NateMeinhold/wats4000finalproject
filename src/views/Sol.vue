<template>
  <div class="sol">
    <h2>Solar Site</h2>

    <form v-on:submit.prevent="findStation">
      <p></p>
    </form>
    <p>Where is the Internal Space Station right now?</p>

    <div class ="results">
      <p>Longitude: {{results.iss_position.longitude}} </p>
      <p>Latitude:{{results.iss_position.latitude}} </p> 
    </div>

    <div class="map">
      <p>This is where the (possible) map could go</p>
      </div>
 <p>
       <router-link to="/views/sunrise">Sunrise App</router-link>
       </P>
    <div class="sunset"><p>what time of day is it there?<button>click</button></p></div> 
  </div>

</template>

<script>
import axios from "axios";

export default {
  name: "Sol",
  data() {
    return {
      results: null
    };
  },
  mounted: function() {
    axios
        .get("http://api.open-notify.org/iss-now.json?callback", {})
        .then(response => {
          this.results = response.data;
        })
        .catch(error => {
          this.errors.push(error);
        });
  },
};
// export default {
//   name: 'Sunrise',
//   data () {
//     return {
//       posts: [],
//       errors: []
//     }
//   },
//   created () {
//     axios.get(`https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400`)
//     .then(response => {
//       this.posts = response.data
//     })
//     .catch(e => {
//       this.errors.push(e)
//     })
//   }
// }


</script>

<style scoped>
.results{
  text-align: center
}
.map{
  text-align: center
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
  color: #42b983;
}
</style>
