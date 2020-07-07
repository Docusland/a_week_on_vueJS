<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div id="axios-result"></div>
    <div id="fetch-result"></div>
  </div>
</template>

<script>
// import axios from 'axios';
export default {
  name: 'HelloWorld',
  data(){
    return {
      nickname: 'yyx990803',
      path: 'https://api.github.com/users/'
    }
  },
  props: {
    msg: String
  },
  mounted() {
    let params = {
      method:'GET'
    };
     fetch('https://cors-anywhere.herokuapp.com/https://anfi.tk/greekApi/person/en/Zeus', params)
        .then((data) => data.json())
        .then((data) => console.log(data)); 
        //document.getElementById('axios-result').innerText = data);
    // axios.get(this.path + this.nickname)
    //   .then( response => JSON.stringify(response))
    //   .then( (reponseText) => {
    //     document.getElementById('axios-result').innerText = reponseText;
    //   });

    // fetch(this.path + this.nickname)
    //   .then( (data) => data.json())
    //   .then( (user) => {
    //     document.getElementById('fetch-result').innerText = user.login;
    //   });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#axios-result{
  border:1px solid black;
  color: blue;
}
#fetch-result {
  border: 1px dashed red;
  color: black;
}
</style>
