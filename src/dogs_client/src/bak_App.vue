<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js Appaa"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios'
//import Web3 from 'web3'
import { ethers } from "ethers"

export default {
  name: 'App',
  data() {
    return {signature: "Empty"}
  },
  components: {
    HelloWorld
  },
  created() {

    async function qoo() {
      if (window.ethereum) {
          console.log("eth")
          
          const provider = new ethers.providers.Web3Provider(window.ethereum)
          const signer = provider.getSigner()
          const signature = await signer.signMessage("Hello World");
          
          axios.get('http://localhost:55666/api')
               .then(response => {
                console.log(response.data)
          })
          console.log("asd")
          console.log(signature)
          var post_data = {
            signature: signature,
          }
          axios.post("http://localhost:55666/api/login", post_data)
              .then(response => {
                console.log("POST RES")
                console.log(response.data)
            }
          )
      }
    }
    qoo()
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
