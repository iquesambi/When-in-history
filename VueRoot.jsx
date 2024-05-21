
import { ChooseBy } from "./presenters/chooseGameByPresenter";
import { Home } from "./presenters/entryScreenPresenter";
import { SetCards } from "./presenters/setCardsPresenter";
import { SetTheme } from "./presenters/setThemePresenter";
import { Score } from "./presenters/scorePresenter";
import { CardSorting } from "./presenters/cardSortingPresenter";
import { SideMenu } from "./presenters/sideMenuPresenter";
import { SavedCards } from "./presenters/savedCardsPresenter";
import { Leaderboard } from "./presenters/leaderboardPresenter";

import { CardsSkelethon } from "./presenters/skelethonPresenter";
import { CardSortingRights } from "./presenters/cardSortingRightsPresenter";
import { CardSortingAcessible } from "./presenters/cardSortingAcessiblePresenter";
import { CardSortingRightsAcessible } from "./presenters/cardSortingRightsAcessiblePresenter";
import { SavedCardsAcessible } from "./presenters/savedCardsAcessiblePresenter";
import { createRouter, createWebHashHistory, RouterView} from "vue-router";



export function makeRouter(model){
  
    return createRouter({
      history: createWebHashHistory(),
      routes:[
 {
        path: "/login",
        component: <Home model={model} />,
        meta:{isAuth: false}
},
 {
        path: "/",
        component: <ChooseBy model={model} />,
},
 {
        path: "/setCards",
        component: <SetCards model={model} />,
},
 {
    path: "/setTheme",
    component: <SetTheme model={model} />,

},
{
    path: "/score",
    component: <Score model={model} />,
},
{
    path: "/cardSorting",
    component: <CardSorting model={model} />,    
},
{
    path: "/sideMenu",
    component: <SideMenu model={model} />,
},
{
    path: "/saved",
    component: <SavedCards model={model} />,
},
{
    path: "/leaderboard",
    component: <Leaderboard model={model} />,
},
{
    path: "/skelethon",
    component: <CardsSkelethon model={model} />,
},
{
    path: "/rights",
    component: <CardSortingRights model={model} />,
},
{
    path: "/cardSorting/acessible",
    component: <CardSortingAcessible model={model} />,
},
{
    path: "/rights/acessible",
    component: <CardSortingRightsAcessible model={model} />,
},
{
    path: "/saved/acessible",
    component: <SavedCardsAcessible model={model} />,
},
]});
}



export function VueRoot(props){

   if (props.model.sideMenu==1 && props.model.ready == true){
    return (
        <div>
        <SideMenu model={props.model} />
            <div class="modal_bg" onClick={closeModalACB}>
                <RouterView/>
            </div>
        </div>
    );} else if(props.model.sideMenu!=1 && props.model.ready == true){
        return (<RouterView/>)
    } else if (props.model.sideMenu!=1 && props.model.ready == false){
        return<img src="https://brfenergi.se/iprog/loading.gif"></img>
    }

    function closeModalACB(){
        props.model.changeSideMenu()

    }
}


