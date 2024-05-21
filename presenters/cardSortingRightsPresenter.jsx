import { CardSortingRightsView } from "../views/cardSortingRightsView";
import { saveLeaderboardToFirebase } from "../firebaseModel";


export function CardSortingRights(props){
    if (props.model.user != null){

    return <CardSortingRightsView cardsorting={props.model.CardSorting} rightArray ={props.model.rightsarray}  
    gotoScore={gotoScoreACB}
    saveCard={saveCardACB}/>
   
    function gotoScoreACB(){
        window.location.hash="#/score" 
    }
    
    function saveCardACB(id_holder){
        props.model.saveCards(id_holder)
    }

} else {
    window.location.hash="#/login"
}
}