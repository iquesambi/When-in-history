import "/style.css"

export function modalView(props){
    return(
    
        <div class="modal">
        <button class="back"onClick={closeModal} > <img src="x.svg"></img></button>
        <h3>Are you sure you want to quit?</h3>
        <button class="pill primary" onClick={quitGame}>Quit Game</button>
        <button class="line" onClick={toggleAcessibility}>Play with acessibility mode</button>
        </div>
    
    );


    function toggleAcessibility(){
        props.toggle()
    }

    function quitGame(){
        props.quit()
    }


    function closeModal(){
        props.close()
    }

    

}