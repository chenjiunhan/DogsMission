import { createWebHistory, createRouter } from "vue-router"
import HelloWorld from "@/views/HelloWorld.vue"
import ChooseCharacter from "@/views/ChooseCharacter.vue"

const routes = [
  {
    path: "/",
    name: "HelloWorld",
    component: HelloWorld,
  },
  {
    path: "/choose_character",
    name: "Choose Character",
    component: ChooseCharacter
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router