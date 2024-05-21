import "/style.css"

export function SideMenuView(props){
    return(
     <div>
        <nav>

            <button class="side" onClick={closeModal}><img src="x.svg"></img></button>
            <img class ="avatar" src={props.photo} ></img>
            <div class="info">
            <h6>{props.name}</h6>
            <p>Best Score</p>
            <h6>{props.bestScore.score}</h6>
            <p>Games played</p>
            <h6>{props.played}</h6>
            </div>
            <div class="spacer"></div>

        <ul class ="side_list">
        <li><a href="#/leaderboard" onClick={leaderboard}>Leaderboard</a></li>
        <li><a onClick={saved} >Saved Cards</a></li>
        </ul>
        <div class="spacer"></div>
        <form>
            <input type="checkbox" checked={props.accesibility} onChange={checkboxACB}></input>
            <label>Acessibility Mode</label>
        </form>

        <button class="pill outline" onClick={logOut}> Log out</button>
        </nav>

        </div>
    
    );


    function closeModal(evt){
        props.closeModal();
    }

    function saved(evt){
       
       props.saved()
    }

    function checkboxACB(){
        props.checkbox()
    }

    function leaderboard(){
        props.leaderboard()
    }

    function logOut(){
        props.logOut()
    }

}