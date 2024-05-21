import "/style.css"
import { model } from "../gamemodel"

export function CardSortingRightsView(props){
    return (<div>
        <button onClick={gotoScore} class="pill primary fixed side right">continue</button> 
         {mensage()}
         <p> drag a card to save it for later</p>
         <div className="save" ondrop={dragDropACB} ondragover={dragOverACB}></div>
        <div class ="cards_grid">

             {props.cardsorting.map(cardRenderACB)}
        </div>
    </div>)
   
    function cardRenderACB(fact, y){
    // console.log("index", y)
     if(props.rightArray[y]==1){
        return (  
        <div>    
        <div draggable="true"  class="Newcard" ondragstart={dragStartACB} ondragend={dragEndACB} id={fact.event} ondblclick={clickACB}>
            <img draggable="false" class="card_img" src="place_holder.png"></img>
            <div class="text rights"><p>{fact.event}</p></div>
            <h6>{fact.day} | {fact.month} | {fact.year}</h6>
        </div>
        </div>)}
        else{
            return (  
                <div>    
                <div draggable="true"  class="Wrongcard" ondragstart={dragStartACB} ondragend={dragEndACB} id={fact.event} ondblclick={clickACB}>
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
      //  console.log(counter)
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
            }

    function gotoScore(){
        props.gotoScore()
    }

    var card_id = null
    var card = null
    function dragStartACB(evt){
        var x = document.querySelector(".save")
        x.className = "save large" 
       card_id = evt.target.id   
       card = evt.target
    }
    

    function dragEndACB(){
        var x = document.querySelector(".save")
        x.classList.remove("large")
        card_id = null
        card = null
        
    }

    function dragOverACB(evt){
        evt.preventDefault()  
    }

    function dragDropACB(evt){
      evt.preventDefault()
        var id_holder = 0;
        for (let i = 0; i < props.cardsorting.length; i++) {
           if(props.cardsorting[i].event === card_id){
               id_holder = i; 
           }
        }
        props.saveCard(id_holder) 
        card.classList.add("saved_card");
}
}