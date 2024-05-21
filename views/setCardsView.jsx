import "/style.css"

export function SetCardsView(props){
    return(
        <div>
             <button class="side" onClick={menuACB}> 
             <img src="hamburguer.svg"></img>
            </button>

            <img class="logo_small" src="logo.svg" onClick={backHomeACB}></img>

            <h3>Number of cards: {props.cardsnumber}</h3>

            <input type="range" min="3" max="9" step="2" value={props.cardsnumber} onChange={inputACB}/>



            <div>
            <button class="pill primary" onClick={clickStartACB}>Start game</button>
            </div>

        </div>
    );

   /*function ClickEazyACB(evt){
        props.changeHardness(200)
   };

   function ClickMediumACB(evt){
        props.changeHardness(70)
   } ;

   function ClickHardACB(evt){
        props.changeHardness(10)
   } */

   function inputACB(evt){
        props.cards(evt.target.value)
   };

   function clickStartACB(){
        props.populateArray();
    };

    function menuACB(evt){
        props.changeSide()
    }
    
    function backHomeACB(evt){
        props.backHome()
    }

    function menuACB(evt){
        props.changeSide()
    }
}