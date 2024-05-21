
<template>
  <Roulette ref="wheel" :items="items" @click="launchWheel" @wheel-end="wheelEndedCallback"/>
</template>

<script>
import { Roulette } from "vue3-roulette";
import { reactiveModel } from ".";
import { logic } from "../gameLogic";
export default {
  name: "App",
  components: {
    Roulette,
  },
  data() {
    return {
      items: [
        {
          id: 1,
          name: "Greece",
          htmlContent: "Greece",
          textColor: "",
          background: "",
        },
        {
          id: 2,
          name: "Roman empire",
          htmlContent: "Roman empire",
          textColor: "",
          background: "",
        },
        {
          id: 3,
          name: "Discover",
          htmlContent: "Discover",
          textColor: "",
          background: "",
        },
        {
          id: 4,
          name: "China",
          htmlContent: "China",
          textColor: "",
          background: "",
        },
        {
          id: 5,
          name: "India",
          htmlContent: "India",
          textColor: "",
          background: "",
        },
        {
          id: 6,
          name: "War",
          htmlContent: "War",
          textColor: "",
          background: "",
        },
      ],
    };
  },
  methods: {
    launchWheel() {
      this.$refs.wheel.launchWheel();
    },
    wheelEndedCallback(val){
      console.log(val.name);
      reactiveModel.setTheme(val.name);
     
      
      if (reactiveModel.acessibility == false){
            window.location.hash="#/cardSorting"
        }else{
          reactiveModel.hash="#/cardSorting/acessible"
        }

        logic.populateSearchArray()
      reactiveModel.getStartTime()
      reactiveModel.changeGameMode("theme")
    }
  },
};
</script>

<style>
/*#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
