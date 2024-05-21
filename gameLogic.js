import { model } from "./gamemodel"
import { getCardInformation } from "./factSource";
import { reactiveModel } from "./src";
const logic ={

    getRandomYear(){
        do {
            var holder = Math.trunc((Math.random().toFixed(4))*10000)
            var oddOrEven = Math.trunc((Math.random().toFixed(1))*10)
        }while (holder > 2024);
    
        if(oddOrEven %2 ==0){
        return holder
        }else {
            return Math.abs(holder)}
        },
    

    populateSearchArray(){
        window.location.hash="#/skelethon";
        model.loadingStatus = true
        model.searchYears = [];
        model.searchYears = [...model.searchYears, this.getRandomYear()];
        let test=JSON.parse(JSON.stringify(reactiveModel.ForbiddenYears))
        let random;
       // console.log(test);
        let selectionYears=[...Array(2023).keys()]
        selectionYears = selectionYears.filter(function(element) {
            return test.indexOf(element) === -1;
          });
        //console.log(selectionYears);
        for (let i = 0; i < model.cards-1; i++) {
             random = Math.floor(Math.random() * selectionYears.length);
             model.searchYears[i+1]=selectionYears[random];
            /*do{
                model.searchYears[i+1]= this.getRandomYear()
            }while (Math.abs(model.searchYears[0]-model.searchYears[i+1])>=model.dificult)
            */
        }
        let themeList=[]
        if(model.theme[0]==null){
            for(let g=0; g<model.cards;g++){
                themeList[g]=[,model.searchYears[g]];
            }
            
        }
        else{
        for(let g=0; g<model.cards;g++){
            themeList[g]=[model.theme,];
        }
        }
        //console.log(themeList);
       //console.log("test");
        getCardInformation(themeList,reactiveModel);
       // console.log(reactiveModel.CardSorting);
       model.loadingStatus = false
       setTimeout(() => {  if (model.acessibility == false){
        window.location.hash="#/cardSorting"
    }else{
        window.location.hash="#/cardSorting/acessible"
    } ; }, 2000);
        
       
    //this.searchYears.sort()
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      
      
    },

    // gets time used to complete, time percentage of cards right, and dificult level.
    calculateScore(){
        model.time = 0;
        model.time = parseInt(((model.endTime - model.startTime)/1000).toFixed(2));
        if (model.time<0){
            model.time = 2
        }

        if (model.dificult == 200){
            var multiplier = 10;
        }else if(model.dificult == 10){
            multiplier = 20;
        }else {
            multiplier = 30;
        }

        var MT = 100 - model.time
        if( MT <=0){
            MT = 1
        }

        var score = (MT*(model.rightCards/model.CardSorting.length)*multiplier)/3

        if (isNaN(score)){
            model.score = 0
        }else{
            model.score = Math.trunc(score)
        }
        model.startTime = null // fica
        model.endTime = null // fica
        
    },



    }
   
export {logic};