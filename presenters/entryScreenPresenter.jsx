import { HomeView } from "../views/entryScreenView";
import { provider } from "../firebaseModel";
import { signInWithPopup } from "firebase/auth";
import { auth } from "../firebaseModel";

export function Home(props){
    return <HomeView login={loginACB}/>;

    function loginACB(){
        if ( props.model.user != null){
            window.location.hash="#/"
        }else{
        signInWithPopup(auth, provider)
        props.model.isFirstLogin()
        console.log(props.model.onboarding)
        window.location.hash="#/"
        }

    }
}