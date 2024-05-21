export function CardSortingAcessibleView(props){
    return(
        <div>  
              
          <button class="back fixed" onClick={endACB} > <img src="x.svg"></img></button> 
            <button onClick={completeGameACB} class="pill primary fixed side right">continue</button>
            <h2>Put the cards in the right order</h2>
            <div class="acessbility">
                <button disabled={props.leftState}onClick={backACB}>  <img src="left.svg"></img> </button>  <button onClick={advanceACB}> <img src="right.svg"></img> </button>
            </div>
      
         <div class ="cards_grid">
            <div class="container_small" id={-1}></div>
            {props.cardsorting.map(cardRenderACB)}
        </div>
         </div>
    );

    function cardRenderACB(fact){
        return (  
        <div>    
            <div class="Newcard" id={fact.event} onclick={click}>

                <img draggable="false" class="card_img" src="place_holder.png" id={fact.event}></img>
                <div class="text"><p>{fact.event}</p></div>
            </div>
                <div class="container_small" id={fact.event}></div>
        </div>
    )}

    function completeGameACB(){
        props.calculateScore()
        window.location.hash="#/rights/acessible" 
    }

 function endACB(){
        props.endButton()
    }

var cardPosition = 0
var lastClicked = null

function click(evt){
    var holder = document.querySelectorAll(".Newcard")

    for (let i = 0; i < holder.length; i++){
        if (holder[i].id != evt.currentTarget.id){
            holder[i].classList.add("selected")
        }else{
            holder[i].classList.remove("selected")
            cardPosition = i
            lastClicked = evt.currentTarget.id
        }
    }
}

function advanceACB(){
    if (cardPosition != null && cardPosition != props.cardsorting.length-1){
        var y = props.cardsorting[cardPosition]
        props.cardsorting.splice(cardPosition,1)
        props.cardsorting.splice(cardPosition+1,0,y)
        var holder = document.querySelectorAll(".Newcard")
        holder[cardPosition].classList.add("selected")
        holder[cardPosition+1].classList.remove("selected")
        setTimeout(changeVisual, 1000)
    }

 }

 function backACB(){

    if (cardPosition != null && cardPosition != 0){
        var y = props.cardsorting[cardPosition]
        props.cardsorting.splice(cardPosition,1)
        props.cardsorting.splice(cardPosition-1,0,y)
        var holder = document.querySelectorAll(".Newcard")
        holder[cardPosition].classList.add("selected")
        holder[cardPosition-1].classList.remove("selected")
        setTimeout(changeVisual, 1000)
        cardPosition = 0
    }

 }

 function changeVisual(){
    var box = document.querySelectorAll(".selected")
    for (let i = 0; i < box.length; i++){
        box[i].classList.remove("selected")
    }
    
}

}