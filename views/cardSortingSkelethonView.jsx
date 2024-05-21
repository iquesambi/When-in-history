export function CardSortingSkelethonView(props){
    return(
        <div>
        <h2>Put the cards in the right order</h2>
        <div class ="cards_grid">
        <CardsEmpty/>
        <CardsEmpty/>
        <CardsEmpty/>
        <CardsEmpty/>
        <CardsEmpty/>
       
        </div>
    </div>

    )

    function CardsEmpty(){
        let counter = 0
        while (counter < 2) {
          
            return <div class="card_skelethon" draggable="true">
                <div class="small_card_skelethon">
                <div class="img_skelethon"></div>
                <div class="line_skl"></div>
                <div class="line_skl"></div>
                <div class="line_skl small"></div>
                </div>
            </div>}
        counter++;
        
    }

}