
import { saveLeaderboardToFirebase } from "./firebaseModel";
import { logic } from "./gameLogic";

const model = {
    //dificult: 200, // easy = 200 medium = 70 hard = 10 // fica
    cards: 5,
    searchYears: [], 
    theme: [,], // não testei
    acessibility: true, 
    startTime: null,
    endTime: null,
    score:0, 
    playedTogether: 0, 
    streakbonus:0,
    time:0,
    rightCards: null,
    CardSorting: [],
    ForbiddenYears: [3],
    CardsForLater: [],
    savedTime: null,
    Saved: [],
    gameMode: null,
    sideMenu: 0,
    closeModal:false,
    user: null,
    leaderboard:[{"name": "Henrique Sambi", "score": 240, "time": 2}],
    bestScorePlayer: {"score": 0, "time": 0},
    favouriteNumber:[0,0,0,0], 
    favouriteHardness:[0,0,0],
    gameCounter: 0, 
    answersarray:[],
    ordersarray:[],
    rightsarray:[], 
    loadingStatus: false,
    leftButtonDisable: false, //
    onboarding: false,
    blockList: [],

    accLButtonChange(){
        if (this.leftButtonDisable ==false){
            this.leftButtonDisable = true
        }else{
            this.leftButtonDisable = false
        }
    },

    setCards(num){ 
        this.cards = num;
    },

    /*setDificult(dif){ 
        this.dificult = dif;
    },*/

    getStartTime(){ 
        this.startTime = performance.now();
        this.endTime = 0
    },
    
    getEndTime(){ // fica
        this.endTime = performance.now();   
    },

    setTheme(word){ // fica
        this.theme[0] = word;
    },

    changeSideMenu(){ // found
        if ( this.sideMenu==0){
             this.sideMenu=1
        }else{
             this.sideMenu=0
    }},

    countGames(){ // fica 
        this.gameCounter +=1
    },

    cleanCards(){
        this.CardSorting = []
        this.rightsarray =[]
    },

    bestScore(){ // fica
      
        if (this.bestScorePlayer.score == 0 && this.bestScorePlayer.time == 0){
            this.bestScorePlayer.name = this.user.displayName
            this.bestScorePlayer.score = this.score
            this.bestScorePlayer.time = this.time
        } else if (this.bestScorePlayer.score< this.score){
            this.bestScorePlayer.score = this.score
            this.bestScorePlayer.time = this.time
        }else if ( this.bestScorePlayer.score ==this.score && this.bestScorePlayer.time > this.time){
            this.bestScorePlayer.time = this.time
        }
        if (this.gameCounter <= 1){
        this.leaderboard = [... this.leaderboard, this.bestScorePlayer]  
        }
    
    console.log(this.leaderboard)
},

    usertoLeaderboard(){ // fica
      var x = this.leaderboard.find((z) => z.name == this.bestScorePlayer.name)
      if (x == undefined){
      this.leaderboard = [... this.leaderboard, this.bestScorePlayer]  
      }else{
        var y= this.leaderboard.findIndex((x) => x.name == this.bestScorePlayer.name)
        this.leaderboard.splice(y,1)
        this.leaderboard = [... this.leaderboard, this.bestScorePlayer]  
    }},

    savefavouriteNumber(){ // fica
        if (this.cards==3){
           this.favouriteNumber[0] = this.favouriteNumber[0] + 1
        }else if(this.cards==5){
            this.favouriteNumber[1] = this.favouriteNumber[1] + 1
         }else if(this.cards==7){
            this.favouriteNumber[2] = this.favouriteNumber[2] + 1
         }else{
            this.favouriteNumber[3] = this.favouriteNumber[3] + 1
    }},

    CSarrayOrganization(draging_index,id_holder){ // fica
        var x = this.CardSorting[draging_index]
        this.CardSorting.splice(draging_index,1)
       if( id_holder>draging_index ){
              this.CardSorting.splice(id_holder-1,0,x)
        }else{
            this.CardSorting.splice(id_holder,0,x)
    }},

   /* savefavouriteHardness(){ // fica
        if (this.dificult==200){
         this.favouriteHardness[0] = this.favouriteHardness[0] + 1
        }else if(this.dificult==70){
            this.favouriteHardness[1] = this.favouriteHardness[1] + 1
         }else{
            this.favouriteHardness[2] = this.favouriteHardness[2] + 1  
    }},*/

    /*favouriteHardnessToGame(){ // fica
        if (this.favouriteHardness!=[0,0,0]){
            var y= Math.max.apply(Math, this.favouriteHardness)
            var x = this.favouriteHardness.indexOf(y)

            if(x==0){
                this.setDificult(200)
            }else if(x==1){
                this.setDificult(70)
            }else{
                this.setDificult(10)
    }}},*/

    favouriteNumberToCard(){ // fica
        if (this.favouriteNumber!=[0,0,0,0]){
            var y= Math.max.apply(Math, this.favouriteNumber)
            var x = this.favouriteNumber.indexOf(y) 

            if(x==0){
                this.setCards(3)
            }else if(x==1){
                this.setCards(5)
            }else if(x==2){
                this.setCards(7)
            }else{
                this.setCards(9) 
    }}},

    calculateRights(){ // found
        this.answersarray= [];
        this.ordersarray = [];
        this.rightsarray=[];
        this.rightCards = 0
        this.CardSorting.map(this.rightsACB)
        this.CardSorting.map(this.rightsOrderACB)
        this.ordersarray = this.ordersarray.sort()

   for (let i = 0; i < this.answersarray.length; i++){
    if ( this.answersarray[i] == this.ordersarray[i]){
        this. rightCards +=1;
        this.rightsarray[i]=1;
    }else{
        this.rightsarray[i]=0;
    }
   }
   var holder = document.querySelectorAll(".Newcard");
   for (let i = 0; i < holder.length; i++){
      if (this.rightsarray[i] !=1){
           
          holder[i].classList.remove("Newcard");
            holder[i].classList.add("Wrongcard")
        }
}},

quitGame(){
    this.CardSorting=[];
    this.startTime=null;
},

saveCards(id_holder){
   var found = this.Saved.find((x) => x.event == this.CardSorting[id_holder].event)
    if( found == undefined){
        this.Saved = [... this.Saved, this.CardSorting[id_holder]]  
    }
},

convertArray(x){
   return x || null
},

rightsACB(fact){
model.answersarray = [... model.answersarray, fact.year];  
},

rightsOrderACB(fact){
    model.ordersarray = [... model.ordersarray, fact.year];  
    },

RemoveSaved(id){
        this.Saved.splice(id,1)
    },

StartNewGame(){
    this.CardSorting =[]
    this.searchYears = []
    this.startTime = null
    this.endTime = null
    this.getStartTime()
    
   this.continuationBonus()

    if(this.gameMode == "cards"){
        logic.populateSearchArray()
        this.savefavouriteNumber()
    
    }else{
        logic.populateSearchArray()

    }
},

changeGameMode(value){
    this.gameMode = value
},

    toggleAcessibility(){
        if (this.acessibility == true){
            this.acessibility = false
        } else{
            this.acessibility = true
    }},

    toggleModal(){
        if (this.closeModal == false){
            this.closeModal = true
        } else{
            this.closeModal = false
    }},

    continuationBonus(){
        this.playedTogether += 1;
        this.streakbonus=this.playedTogether*10
        console.log(this.playedTogether)
    },

    addContinuationBonus(){
        if (this.score !=0){
        this.score = this.score + this.streakbonus
        }
        this.streakbonus = 0
        this.playedTogether = 0
    },

    isFirstLogin(){
        if (this.onboarding == false){
        this.onboarding = true
        }
    }

}
export {model};