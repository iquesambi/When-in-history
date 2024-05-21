export function CardSortingView(props){
    return(
        <div>  
              
          <button class="back fixed" onClick={endACB} > <img src="x.svg"></img></button> 
            <button onClick={completeGameACB} class="pill primary fixed side right">continue</button>
            <h2>Put the cards in the right order</h2>
      
         <div class ="cards_grid">
            <div class="container_small" ondragover={dragOverACB} ondragenter={dragEnterACB} ondragleave={dragLeaveACB} ondrop={dragDropACB} id={-1}></div>
            {props.cardsorting.map(cardRenderACB)}
        </div>
         </div>
    );

    function cardRenderACB(fact){
        return (  
        <div>    
            <div draggable="true"  class="Newcard" ondragstart={dragStartACB} ondragend={dragEndACB} id={fact.event}>
                <img draggable="false" class="card_img" src="place_holder.png" id={fact.event}></img>
            <div class="text"><p>{fact.event}</p></div>
            </div>
                <div class="container_small" ondragover={dragOverACB} ondragenter={dragEnterACB} ondragleave={dragLeaveACB} ondrop={dragDropACB} id={fact.event}></div>
        </div>
    )}

    function completeGameACB(){
        props.calculateScore()
        window.location.hash="#/rights" 
    }

var id_holder = 0
var draging_index = 0

    function dragStartACB(evt){
        id_holder = evt.target.id;
        evt.target.classList.add("test");
        evt.target.classList.add("draging");
        var holder = document.querySelectorAll(".container_small")
        for (let i = 0; i < holder.length; i++) {
            holder[i].className = "container_big" 
            }
        for (let i = 0; i < props.cardsorting.length; i++) {
            if(props.cardsorting[i].event == evt.target.id){
                draging_index = i;
            }
        }
    }

    function dragEndACB(evt){
        evt.target.classList.remove("test"); // rename this class
        evt.target.classList.remove("draging");
        var holder = document.querySelectorAll(".container_big");
        for (let i = 0; i < holder.length; i++) {
            holder[i].className = "container_small" 
        }
    }

    function dragOverACB(evt){
        evt.preventDefault()  
    }

    function dragEnterACB(evt){
        if(evt.target.id != -1){
            for (let i = 0; i < props.cardsorting.length; i++) {
                if(props.cardsorting[i].event == evt.target.id){
                    id_holder = i+1;
                }
            }
        }else{
            id_holder=0  
        }

        if(id_holder!=draging_index && id_holder-1!=draging_index){
            evt.target.className = "hovered"    
        }
    }
   
    function dragLeaveACB(evt){
        setTimeout(reduceDIV, 1000)

        function reduceDIV(){
    evt.target.className = "container_big"
        }
    }
    
    function dragDropACB(evt){
        evt.preventDefault()

    
        var holder = document.querySelector(".hovered")
        holder.classList = "container_small"
        

        props.arrayReorder(draging_index,id_holder )

    }

 function endACB(){
        props.endButton()
    }

}