import { LeaderboardView } from "../views/leaderboardView";

export function Leaderboard(props){
    if (props.model.user != null){
    return <LeaderboardView leaderboard = {props.model.leaderboard}  user ={props.model.user} changeSide={changeSideACB} backHome={backHomeACB}/>;

    function changeSideACB(){
        props.model.changeSideMenu() 
    }

    function backHomeACB(){
        window.location.hash="#/"
    }
} else{
    window.location.hash="#/login"
}
}
