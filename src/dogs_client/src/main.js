import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Web3 from 'web3'

async function foo() {
    console.log("async")
    if (window.ethereum) {
        console.log("eth")
        if (!window.ethereum.selectedAddress) {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
            console.log(accounts)
        }
        const web3 = new Web3(window.ethereum)
        const userAccount = window.ethereum.selectedAddress
        console.log(userAccount)
        const msg_hash = web3.utils.sha3("Test")
        //const sign = await web3.eth.sign(, userAccount)
        var signature = await web3.eth.personal.sign("我有一隻小毛驢", userAccount)
        console.log(signature)
    }
}
//foo()

const dogApp = createApp(App).use(router)
dogApp.use(router)
      .mount('#app')

