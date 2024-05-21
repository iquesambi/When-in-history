import { ChooseByView } from "../views/chooseGameByView";

export function ChooseBy(props){
     if (props.model.user != null){
     return <ChooseByView changeSide={changeSideACB} byTheme={byThemeACB} bycard={byCardACB}/>

     function changeSideACB(){
          props.model.changeSideMenu()
     }

     function byThemeACB(){
          props.model.setCards(3)
          window.location.hash="#/setTheme"
     }

     function byCardACB(){
          props.model.favouriteNumberToCard()
         
          window.location.hash="#/setCards"
     }
} else {
     window.location.hash="#/login"
}
}

