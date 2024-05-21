import { SetThemeView } from "../views/setThemeView";
import { logic } from "../gameLogic";

export function SetTheme(props){
    if (props.model.user != null){
    return <SetThemeView hardness={props.model.dificult} changeHardness={dificultACB}  populateArray={populateACB} theme={props.model.theme} changeTheme ={ThemeACB} changeSide={changeSideACB} backHome ={backHomeACB}/>;

    function dificultACB(number){
        props.model.setDificult(number)
    }

    function populateACB(){
        logic.populateSearchArray()
        props.model.getStartTime()
        props.model.savefavouriteHardness()
        props.model.changeGameMode("theme")
        if (props.model.acessibility == false){
            window.location.hash="#/cardSorting"
        }else{
            window.location.hash="#/cardSorting/acessible"
        }
    }

    function ThemeACB(word){
        props.model.setTheme(word)
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
