

export function SetThemeView(props){
    return(
        <div>
             <button class="side" onClick={menuACB} > 
           <img src="hamburguer.svg"></img>
            </button>

            <img class="logo_small" src="logo.svg" onClick={backHomeACB}></img>
            <h3>Spin for theme</h3>
        
            <div class="custom_component"><Roulette  onChange={changeThemeACB}/></div>
          
        </div>
    );

   /*function ClickEazyACB(evt){
        props.changeHardness(200)
   };

   function ClickMediumACB(evt){
        props.changeHardness(70)
   } ;

   function ClickHardACB(evt){
        props.changeHardness(10)
   } 

   function clickStartACB(){
        props.populateArray();
    };*/
    
    function changeThemeACB(evt){
        props.changeTheme(evt.target.value);
    }

    function menuACB(evt){
        props.changeSide()
    }

    function backHomeACB(evt){
        props.backHome()
    }
    
}