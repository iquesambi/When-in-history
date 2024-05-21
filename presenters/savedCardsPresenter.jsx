import { SavedCardsView } from "../views/savedCardsView";

export function SavedCards(props){
    return <SavedCardsView savedCards ={props.model.Saved} changeSide={changeSideACB} remove={removeACB} acessibility={props.model.acessibility}/>;

    function changeSideACB(){
        props.model.changeSideMenu() 
    }

    function removeACB(id){
    props.model.RemoveSaved(id)
    }

}
