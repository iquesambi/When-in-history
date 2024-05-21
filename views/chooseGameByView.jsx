
export function ChooseByView(props){
    return(
        <div>
            <button class="side right" onClick={menuACB} > 
            <img src="hamburguer.svg"></img>
            </button>
            <img class="logo_small" src="logo.svg" ></img>
            <h3>Start new game</h3>

            <button class="pill secundary" onClick={bycardsACB}>Choose by number of cards</button>
           <div> <button class="pill terciary" onClick={bythemeACB}>Choose by Theme</button></div>
           </div>
    );

function bycardsACB(evt){
    props.bycard()
};

function bythemeACB(evt){
    props.byTheme()
}

function menuACB(evt){
    props.changeSide()
}

}