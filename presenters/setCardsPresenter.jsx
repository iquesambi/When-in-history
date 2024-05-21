import { SetCardsView } from "../views/setCardsView";
import { logic } from "../gameLogic";

export function SetCards(props){
    if (props.model.user != null){

    return <SetCardsView hardness={props.model.dificult} changeHardness={dificultACB} cards={changeCardsACB} populateArray={populateACB} cardsnumber = {props.model.cards} changeSide={changeSideACB} backHome={backHomeACB}/>;

    function dificultACB(number){
        props.model.setDificult(number)
    }

    function changeCardsACB(number){
        props.model.setCards(number)
    }

    function populateACB(){
        props.model.setTheme(null);
        logic.populateSearchArray()
        props.model.getStartTime()
        props.model.savefavouriteNumber()
       // props.model.savefavouriteHardness()
        props.model.changeGameMode("cards")
        console.log()
        
    }

    function changeSideACB(){
        props.model.changeSideMenu()
    }

    function backHomeACB(){
        window.location.hash="#/"
    } 
} else {
    window.location.hash="#/login"
}
}
