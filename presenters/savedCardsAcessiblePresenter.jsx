import { SavedCardsAcessibleView } from "../views/savedCardsAcessibleView";

export function SavedCardsAcessible(props){
    return <SavedCardsAcessibleView savedCards ={props.model.Saved} changeSide={changeSideACB} remove={removeACB} acessibility={props.model.acessibility}/>;

    function changeSideACB(){
        props.model.changeSideMenu() 
    }

    function removeACB(id){
    props.model.RemoveSaved(id)
    }

}
