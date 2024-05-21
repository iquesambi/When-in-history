import { initializeApp } from "firebase/app";
import { getDatabase, set, ref, get, onValue, off } from "firebase/database";
import { firebaseConfig} from "./firebaseConfig";
import { getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider, onAuthStateChanged, signOut} from "firebase/auth";
import { model } from "./gamemodel";
import {reactive, watch} from "vue"; 



const app= initializeApp(firebaseConfig)
export const auth = getAuth(app);
const db= getDatabase(app);


export const provider = new GoogleAuthProvider();

const PATH="WhenInHistory/";

export function modelToPersistence(model){
   
    return {
        CardsAmount: parseInt(model.cards),
        StartTime: model.startTime,
        EndTime:model.endTime,
        SearchYear:model.searchYears,
        SavedCards: model.convertArray(model.Saved),
        CardSorting : model.convertArray(model.CardSorting),
        BestScore: model.bestScorePlayer,
        FavNumber: model.favouriteNumber,
        Theme: model.theme, 
        RightCards: model.rightCards,
        Acessibility: model.acessibility,
        FavHardness: model.favouriteHardness,
        Counter: model.gameCounter,
        Rights: model.rightsarray,
        Continuation: model.playedTogether,
    }
}

export function ForbiddenYearsToPersistence(model){
    return {
        ForbiddenYears: model.convertArray(model.ForbiddenYears),   
    }
}


 export function persistenceToModel(firebaseObj, model){
    
    if (firebaseObj != undefined){
        model.cards=firebaseObj.CardsAmount;
        model.SavedCards = firebaseObj.SavedCards
        model.CardSorting= firebaseObj.CardSorting
        model.acessibility = firebaseObj.Acessibility
        model.bestScorePlayer = firebaseObj.BestScore
        model.favouriteNumber = firebaseObj.FavNumber
      //  model.favouriteHardness = firebaseObj.FavHardness
        model.gameCounter = firebaseObj.Counter
        model.playedTogether = firebaseObj.Continuation

        if (firebaseObj.Rights!= undefined){
        model.rightsarray = firebaseObj.Rights
        }

        if(firebaseObj.RightCards != undefined){
        model.rightCards = firebaseObj.RightCards
        }else{
            model.rightCards = null
        }

        if(firebaseObj.SavedCards != undefined){
        model.Saved = firebaseObj.SavedCards
        }

        if(firebaseObj.StartTime != undefined){
            model.startTime = firebaseObj.StartTime; 
        } else{ 
            model.startTime = null
        }

        if(firebaseObj.EndTime != undefined){
            model.endTime = firebaseObj.EndTime
        }else{
            model.endTime = null
        }

        if(firebaseObj.SearchYear != undefined){
            model.searchYears = firebaseObj.SearchYear
        }else{
            model.searchYears = []
        }

        if (firebaseObj.Theme != undefined){
        model.setTheme(firebaseObj.Theme);
        }
       
       // model.playedTogether = firebaseObj. PersistedPlayedTogether;

    }else {
        model.cards=5;
        model.SavedCards = []
        //model.setTheme();
        model.endTime = null;
       model.searchYears = [];
        model.rightCards = null;
        model.acessibility = false
        model.Saved =[]
        model.bestScorePlayer = { "score": 0, "time": 0}
        model.favouriteNumber = [0,0,0,0]
       // model.favouriteHardness = [0,0,0]
        model.rightCards = null
        model.gameCounter = 0
        model.rightsarray = []
        model.playedTogether = 0
       
    }
}

function ForbiddenYearsToModel(firebaseObj, model){
    
    if (firebaseObj != undefined){
        model.ForbiddenYears=firebaseObj.ForbiddenYears;
    }else {
        model.ForbiddenYears = [3]
    }
}

/*function LiveUpdateToModel(firebaseObj, model){
  
    if (firebaseObj != undefined){

        if (firebaseObj.CardsAmount !=model.cards){
            model.cards=firebaseObj.CardsAmount;
        }

        if (firebaseObj.BestScore != model.bestScorePlayer){
            model.bestScorePlayer = firebaseObj.BestScore
        }

        if (firebaseObj.Acessibility != model.acessibility){
            model.acessibility = firebaseObj.Acessibility
        }

        if (firebaseObj.FavNumber != model.favouriteNumber){
            model.favouriteNumber = firebaseObj.FavNumber
        }

        if (firebaseObj.FavHardness != model.favouriteHardness){
            model.favouriteHardness = firebaseObj.FavHardness
        }

        if (firebaseObj.Counter != model.gameCounter){
            model.gameCounter = firebaseObj.Counter
        }

        if (firebaseObj.Counter != model.gameCounter){
            model.gameCounter = firebaseObj.Counter
        }

        if(firebaseObj.SavedCards != undefined && firebaseObj.SavedCards!=model.Saved ){
            model.Saved = firebaseObj.SavedCards
        }

    }
}*/

export function saveToFirebase(model){
    if (model.ready == true){
        set(ref(db, PATH+uid), modelToPersistence(model))
    }
}

export function readFromFirebase(model){
   // console.log("reading from firebase")
    model.ready = false
   return get(ref(db, PATH+uid))
              .then(function convertACB(snapshot){
                     // return promise
                    return persistenceToModel(snapshot.val(), model);
               }).then(function setModelReadyACB(){model.ready=true})      
  }

  var uid = null
export function connectToFirebase(model, watch){


onAuthStateChanged(auth, loginOrOutACB);

function loginOrOutACB(id){
    if (id){
        model.user = id
   //     console.log(model.user)
        readFromFirebase(model);
        readForbiddenYearsFromFirebase(model)
        readLeadeboardFromFirebase(model);
        uid = model.user.uid 
      onValue(ref(db, PATH+"forbiden"),(snapshot) =>{
            const data = snapshot.val();
          ForbiddenYearsToModel(data, model)
        })

        onValue(ref(db, PATH+"leaderboard"),(snapshot) =>{
            const leaderdata = snapshot.val();
            persistedleaderboardToModel(leaderdata, model);
        })
            
        if(window.location.hash=="#/login"){
        window.location.hash="#/"}
    }else{
       // off(ref(db, PATH+uid))
        off(ref(db, PATH+"leaderboard"))
        model.user = null
        uid = null
    }
   
    readFromFirebase(model);
    

    function effectACB(){
        saveToFirebase(model);
    }
    
    function checkACB(){
        return [ model.cards, model.dificult, model.startTime, model.endTime, model.searchYears, model.Saved, model.CardSorting,model.bestScorePlayer,model.favouriteNumber, model.theme ,model.rightCards,  model.acessibility,model.gameCounter,  model.playedTogether]
    }

    watch(checkACB, effectACB)

    function effectLeaderACB(){
        saveLeaderboardToFirebase(model);
    }
    
    function checkLeaderACB(){
        return [model.leaderboard]
    }

    watch(checkLeaderACB, effectLeaderACB)

    function effectforbidenACB(){
        saveForbiddenYearsToFirebase(model);
    }
    
    function checkforbidenACB(){
        return [model.ForbiddenYears]
    }

    watch(checkforbidenACB, effectforbidenACB)
}}

export function leaderboardToPersistence(model){
    return {
      leaderboard: model.convertArray(model.leaderboard),
    }
}

 export function persistedleaderboardToModel(firebaseObj, model){
    if (firebaseObj != undefined){
        model.leaderboard=JSON.parse(JSON.stringify(firebaseObj.leaderboard));
       
    }else {
        model.leaderboard=[]
      
    }
}

export function saveLeaderboardToFirebase(model){
    if (model.ready == true){
        set(ref(db, PATH+"leaderboard"), leaderboardToPersistence(model))
    }
}

export function readLeadeboardFromFirebase(model){
    model.ready = false
   return get(ref(db, PATH+"leaderboard"))
              .then(function convertACB(snapshot){
                    return persistedleaderboardToModel(snapshot.val(), model);
               }).then(function setModelReadyACB(){model.ready=true})      
  }

 /*-----*/ 
  export function saveForbiddenYearsToFirebase(model){
    if (model.ready == true){
        set(ref(db, PATH+"forbiden"), ForbiddenYearsToPersistence(model))
    }
}

export function readForbiddenYearsFromFirebase(model){
    model.ready = false
   return get(ref(db, PATH+"forbiden"))
              .then(function convertACB(snapshot){
                    return ForbiddenYearsToModel(snapshot.val(), model);
               }).then(function setModelReadyACB(){model.ready=true})      
  }
 