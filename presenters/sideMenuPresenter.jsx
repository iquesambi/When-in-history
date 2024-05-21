import { SideMenuView } from "../views/sideMenuView";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseModel";
import { readLeadeboardFromFirebase } from "../firebaseModel";


export function SideMenu(props){
    if (props.model.user != null){
    return <SideMenuView 
    closeModal={closeModalACB} 
    logOut={logOutACB} 
    leaderboard={leaderboardACB} 
    name ={props.model.user.displayName} 
    photo={props.model.user.photoURL}
    bestScore={props.model.bestScorePlayer}
    accesibility={props.model.acessibility}
    checkbox ={checkboxACB}
    saved={savedACB}
    played ={props.model.gameCounter}/>;

    function closeModalACB(){
        props.model.changeSideMenu()
    }

    function checkboxACB(){
        props.model.toggleAcessibility()
    }

    function logOutACB(){
        signOut(auth);
        window.location.hash="#/"
        props.model.changeSideMenu()
    }

    function leaderboardACB(){
        props.model.changeSideMenu()
       readLeadeboardFromFirebase(props.model)
       console.log(props.model.leaderboard)
        window.location.hash="#/leaderboard"
    }

    function savedACB(){
        if (props.model.Saved.length == 0){
            alert("You don't have cards saved yet, play a game to save some");
        }else if (props.accesibility === true){
            window.location.hash="#/saved/acessible"
        }else{
            window.location.hash="#/saved/"
        }
        props.model.changeSideMenu()
       
    }
} else {
    window.location.hash="#/login"
}
}