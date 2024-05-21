import {createApp} from "vue";
//import { Home } from "../presenters/entryScreenPresenter";
//import { SetCards } from "../presenters/setCardsPresenter";
//import { getCardInformation, getFact} from "../factSource";
//import { resolvePromise } from "../resolvePromise";
import "../firebaseModel";
import { connectToFirebase } from "../firebaseModel";
import { watch } from "vue";
import { model } from "../gamemodel";
//import { logic } from "../gameLogic"; 

import { reactive } from "vue";
import { VueRoot } from "../VueRoot";
import { makeRouter } from "../VueRoot";
import Roulette from "./App.vue"





const reactiveModel= reactive(model);
connectToFirebase(reactiveModel, watch)

const app= createApp(<VueRoot model={reactiveModel} />);
app.use(makeRouter(reactiveModel));
app.component("Roulette", Roulette);

app.mount('#root');

//console.log("hej");
/*
for(let i=0;i<a.length;i++){
a[i].then(testACB);}
function testACB(val){
    console.log("nu");
    console.log(val);
}
*/
//console.log(reactiveModel.CardSorting[0].then(testACB));

export{reactiveModel}

