export function HomeView(props){
    return(
        <div class ="home">
            <img src="logo.svg"></img>
            <button class="pill primary" onClick={secondScreenACB}>Log in or create account</button>
        </div>
    );
    
    function secondScreenACB(evt){
        props.login()    
    }
}