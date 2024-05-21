import { CardSortingView } from "../views/cardSortingView";
import { CardSortingSkelethonView } from "../views/cardSortingSkelethonView";
import { logic } from "../gameLogic";
import { modalView } from "../views/modalView";

export function CardSorting(props){
    if (props.model.user != null){

       if(props.model.closeModal==1){
    return <div>
        <modalView quit={quitACB} saveGame={saveACB} close={closeModalACB} toggle={toggleACB}/>
        <CardSortingView cardsorting={props.model.CardSorting} numberofcards={props.model.cards} calculateScore={calculateScoreACB} rightArray ={props.model.rightsarray} endButton={endButtonACB} />;
        </div>
    } else{
       return <CardSortingView cardsorting={props.model.CardSorting} numberofcards={props.model.cards} calculateScore={calculateScoreACB} rightArray ={props.model.rightsarray} endButton={endButtonACB} 
       arrayReorder={arrayReorderACB}
       acessibilityButton={props.model.acessibilityButton}/>;
    }

    function arrayReorderACB(draging_index,id_holder){
        props.model.CSarrayOrganization(draging_index,id_holder)
    }

    function toggleACB(){
        props.model.toggleModal()
        window.location.hash="#/cardSorting/acessible"
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
} else {
    window.location.hash="#/login"
}
}