export function LeaderboardView(props){
  return(
    <div>
       <button class="side right" onClick={menuACB} > 
            <img src="hamburguer.svg"></img>
            </button>

       <img class="logo_small" src="logo.svg" onClick={backHomeACB}></img>
     

      <div class="leaderboard_table">
 <table>
  <tr>
    <th>Name</th>
    <th>Score</th>
    <th>Time</th>
  </tr>
  {props.leaderboard.sort(sortleader).map(leaderboardrender)}
  </table>
  </div>

      </div>
    
);

function sortleader(a,b){
  if(a.score > b.score){
   return -1
  }
}

function leaderboardrender(fact, index){
if (props.user.displayName == fact.name){
  return (  
    <tr class="user_leader">
    <td>{fact.name}</td>
    <td>{fact.score}</td>
    <td>{fact.time}</td>
  </tr>
)}else if ( index % 2 ==0) {
  return (  
    <tr class="even_leader" >
    <td>{fact.name}</td>
    <td>{fact.score}</td>
    <td>{fact.time}</td>
  </tr>)
} else{
  return (  
    <tr>
    <td>{fact.name}</td>
    <td>{fact.score}</td>
    <td>{fact.time}</td>
  </tr>)
}
}

function backHomeACB(evt){
  props.backHome()
}

function menuACB(evt){
  props.changeSide()
}
}
