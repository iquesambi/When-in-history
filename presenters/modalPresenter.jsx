// delete this one later
import { modalView } from "../views/modalView"

export function Modal(props){
    return <modalView quit={quitACB} acessibility={toggleACB} />

    function toggleACB(){
        window.location.hash="#/cardSorting/acessible"
    }
    
    function quitACB(){
        props.model.quitGame()
        window.location.hash="#/"
    }
    
   
}