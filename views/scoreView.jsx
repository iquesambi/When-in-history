import "/style.css"

export function ScoreView(props){
    return(
        <div>
            <h2 class="total">Total Score</h2>
            <h5>{props.score}</h5>
            <span class="hardnessbox score">
            <span>Streak bonus {props.streak}</span>
            <span>Seconds {props.seconds}</span>
            <span>Accuracy {props.rights}/{props.cards}</span>
            </span>

            <button class="pill primary" onClick={newGame}>PLAY AGAIN</button>
            <button onClick={backHomeACB} class="line">Back to home page</button>
            
        </div>
        
    );

    function backHomeACB(evt){
        props.backHome()
    };

    function newGame(){
        props.newGame()
    }


}
