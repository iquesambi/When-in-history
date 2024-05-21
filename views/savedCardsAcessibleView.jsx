import "/style.css" 
/*function WithoutCards(props){
    <h2>You don't have saved cards yet.</h2>
    <h3>Play a game to save!</h3>
}*/

 export function SavedCardsAcessibleView (props){
    return(
        <div>
             <button class="side right" onClick={menuACB} > 
            <img src="hamburguer.svg"></img>
            </button>

                <img class="logo_small" src="logo.svg" onClick={backHomeACB}></img>
                <h2>Your Saved Cards</h2>
                <p> Double click at a card to delete it</p>
             
         <div class ="cards_grid">
          {props.savedCards.map(renderACB)}
            </div>

        </div>
    );

    function menuACB(evt){
        props.changeSide()
      }
    

function renderACB(fact){
    return ( 
        <div  class="Newcard" id={fact.event} ondblclick={clickACB}>
        <img draggable="false" class="card_img" src="place_holder.png"></img>
    <p>{fact.event}</p>
    <h6>{fact.day} | {fact.month} | {fact.year}</h6>
    </div>)
}
 
      function backHomeACB(evt){
        window.location.hash="#/"
    }

    function clickACB(evt){
       var id_holder = 0;
      for (let i = 0; i < props.savedCards.length; i++) {
            if(props.savedCards[i].event === evt.currentTarget.id){
                id_holder = i; 
            } }
        props.remove(id_holder)
    }

    
}