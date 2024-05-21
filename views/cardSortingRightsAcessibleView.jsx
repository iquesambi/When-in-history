import "/style.css"
import { model } from "../gamemodel"

export function CardSortingRightsAcessibleView(props){
    return (<div>
        <button onClick={gotoScore} class="pill primary fixed side right">continue</button> 
         {mensage()}
         <p> double click at a card to save it for later</p>
        <div class ="cards_grid">

             {props.cardsorting.map(cardRenderACB)}
        </div>
    </div>)
   
    function cardRenderACB(fact, y){
     if(props.rightArray[y]==1){
        return (  
        <div>    
        <div draggable="false"  class="Newcard" id={fact.event} ondblclick={clickACB}>
            <img draggable="false" class="card_img" src="place_holder.png"></img>
            <div class="text rights"><p>{fact.event}</p></div>
            <h6>{fact.day} | {fact.month} | {fact.year}</h6>
        </div>
        </div>)}
        else{
            return (  
                <div>    
                <div draggable="false"  class="Wrongcard" id={fact.event} ondblclick={clickACB}>
                    <img draggable="false" class="card_img" src="place_holder.png"></img>
                    <div class="text rights"><p>{fact.event}</p></div>
                    <h6>{fact.day} | {fact.month} | {fact.year}</h6>
                </div>
                </div>)
        }

    }

    function mensage(){
        var counter = 0
        for (let i = 0; i < props.rightArray.length; i++) {
            if (props.rightArray[i]==1){
                counter += 1
            }
        }

        if(props.rightArray.length==counter){
            return (<h2>Well Done!</h2>)
        }else if(Math.round(props.rightArray.length/2)==counter){
            return (<h2>Good! but not perfect</h2>)
        }else if (counter ==0){
            return (<h2>Best luck next time</h2>)
        }else{
            return (<h2>Congrats!</h2>)
        }
    }

    function clickACB(evt){

        var id_holder = 0;
        for (let i = 0; i < props.cardsorting.length; i++) {
            if(props.cardsorting[i].event === evt.currentTarget.id){
                id_holder = i; 
            }
         }
         props.saveCard(id_holder) 
         evt.currentTarget.classList.add("saved_card");
       
    }

    function gotoScore(){
        props.gotoScore()
    }


}