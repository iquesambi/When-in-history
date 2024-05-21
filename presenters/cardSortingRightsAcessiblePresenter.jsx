import { CardSortingRightsAcessibleView } from "../views/cardSortingRightsAcessibleView"

export function CardSortingRightsAcessible(props){
    if (props.model.user != null){

    return <CardSortingRightsAcessibleView cardsorting={props.model.CardSorting} rightArray ={props.model.rightsarray}  
    gotoScore={gotoScoreACB}
    saveCard={saveCardACB}
    savedArray ={props.model.Saved}/>
   
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