import "/style.css" 

/*function WithoutCards(props){
    <h2>You don't have saved cards yet.</h2>
    <h3>Play a game to save!</h3>
}*/

 export function SavedCardsView (props){

    return(
        <div>
             <button class="side right" onClick={menuACB} > 
            <img src="hamburguer.svg"></img>
            </button>

                <img class="logo_small" src="logo.svg" onClick={backHomeACB}></img>
                <h2 class="saved_tittle">Your Saved Cards</h2>
                <p> Drag a card to delete it</p>
                <div className="save" ondrop={dragDropACB} ondragover={dragOverACB}></div>
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
        <div draggable="true"  class="Newcard" ondragstart={dragStartACB} ondragend={dragEndACB} id={fact.event}>
        <img draggable="false" class="card_img" src="place_holder.png"></img>
    <p>{fact.event}</p>
    <h6>{fact.day} | {fact.month} | {fact.year}</h6>
    </div>)
}
 
      function backHomeACB(evt){
        window.location.hash="#/"
    }

    var card_id = null
    function dragStartACB(evt){
        var x = document.querySelector(".save")
        x.className = "save large" 
       card_id = evt.target.id   
    }
    

    function dragEndACB(){
        var x = document.querySelector(".save")
        x.classList.remove("large")
        card_id = null
        
    }

    function dragOverACB(evt){
        evt.preventDefault()  
    }

    function dragDropACB(evt){
      evt.preventDefault()
    //  console.log(card_id)
      var id_holder = 0;
      for (let i = 0; i < props.savedCards.length; i++) {
            if(props.savedCards[i].event === card_id){
                id_holder = i; 
            } }
        props.remove(id_holder)
        //console.log(id_holder)

}
}