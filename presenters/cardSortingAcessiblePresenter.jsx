import { CardSortingAcessibleView } from "../views/cardSortingAcessibleView";
import { CardSortingSkelethonView } from "../views/cardSortingSkelethonView";
import { logic } from "../gameLogic";
import { modalView } from "../views/modalView";

export function CardSortingAcessible(props){

   
    if (props.model.user != null){

   if(props.model.closeModal==1){
    return <div>
        <modalView quit={quitACB} saveGame={saveACB} close={closeModalACB} />
        <CardSortingAcessibleView cardsorting={props.model.CardSorting} numberofcards={props.model.cards} calculateScore={calculateScoreACB} rightArray ={props.model.rightsarray} endButton={endButtonACB} />;
        </div>
    } else{
       return <CardSortingAcessibleView cardsorting={props.model.CardSorting} numberofcards={props.model.cards} calculateScore={calculateScoreACB} rightArray ={props.model.rightsarray} endButton={endButtonACB} 
       arrayReorder={arrayReorderACB}
       acessibilityButton={props.model.acessibilityButton}
       leftState={props.model.leftButtonDisable}
       changeState={changeStateACB}/>;
    }

    function arrayReorderACB(draging_index,id_holder){
        props.model.CSarrayOrganization(draging_index,id_holder)
    }

    function endButtonACB(){
       props.model.toggleModal()
    }

    function closeModalACB(){
        props.model.toggleModal()
    }

    function quitACB(){
        props.model.quitGame()
        props.model.toggleModal()
        window.location.hash="#/"
    }

    function saveACB(){
        props.model.toggleModal()
        window.location.hash="#/"
    }

    function calculateScoreACB(){
        props.model.getEndTime();
        props.model.calculateRights()
        logic.calculateScore()
    }

    function changeStateACB(){
        props.model.accLButtonChange()
    }

   

} else {
    window.location.hash="#/login"
}
}