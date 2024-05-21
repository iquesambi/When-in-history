import { ScoreView } from "../views/scoreView";
import { saveLeaderboardToFirebase } from "../firebaseModel";


export function Score(props){
    if (props.model.user != null){

    return <ScoreView score={props.model.score} streak={props.model.streakbonus} cards={props.model.CardSorting.length} seconds={props.model.time} rights={props.model.rightCards} backHome={backHomeACB} newGame={newGameACB}/>;

    function backHomeACB(){
        props.model.countGames()
        props.model.addContinuationBonus()
        props.model.bestScore()
        props.model.setTheme(null)
        props.model.usertoLeaderboard()
        window.location.hash="#/"
        props.model.cleanCards()
    

       // saveLeaderboardToFirebase(props.model)
    }

    function newGameACB(){
        props.model.StartNewGame()
        props.model.countGames()
        props.model.bestScore()
        props.model.usertoLeaderboard()

   
   // saveLeaderboardToFirebase(props.model)
    }
} else {
    window.location.hash="#/login"
}
}
