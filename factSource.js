import { BASE_URL, API_KEY } from "./apiConfig";


export function getFact(searchParams){
	//searchParams should come in the form of an array [theme,year]. Currently there is no check to see if the array is correct
	const options ={
	method: 'GET',
	headers: {'X-Api-Key': API_KEY}
	}
	let year = null;
	var queryVal="";
	if(searchParams[0]){
		queryVal+="text="+searchParams[0];
	}
	if(searchParams[1]){
		queryVal+="&year="+searchParams[1].toString();
		year=searchParams[1];
	}
//	console.log(queryVal);
	function complexSearchACB(givenObject){
		//console.log(givenObject);
        return givenObject.json();
    	}
    	function complexGetArrayACB(givenObject){
			//console.log(givenObject);
        	return [givenObject,year];
    	}
	//Will probably have to change the ACBs since the fetch is different than the other API, will have to test it out an see what 	works
   	return fetch(BASE_URL+queryVal,options).then(complexSearchACB).then(complexGetArrayACB);
		
}
export function getCardInformation(callValues,model){
	let cards=[];
	let facts=[];
	let set = 0;
	//callValues has to be at least 2 different calls, ex: [["greece",1983],["rome",]]
	//returns a list full of lists where the first element is the fact and the second is the date turned into a string.

	if(callValues[0][0]){
		let rando=getRndInteger(0,50);
		callValues[0]=[callValues[0][0]+"&offset="+rando.toString()];
		cards=getFact(callValues[0]).then(convertOtherACB);
	}
	else{
	set=1;
	for(let i =0; i<callValues.length; i++){
		//Have to add something that gets a new year if there is no fact for the given year, make sure that there is no conflict with the years in the model.

		facts=getFact(callValues[i]).then(testACB).then(convertACB);
		//console.log(facts);
        cards.push(facts);
		//[Math.floor(Math.random()*facts.length)]
	}}
	//console.log("test");
	//console.log(cards);
	if(set==0){
	cards.then(returnACB);
	}
	else{
	Promise.all(cards).then(returnACB);
	}
	function returnACB(val){
		//console.log("har");
		//console.log(val);
		val=objectFilter(val);
		//console.log(val);
		model.CardSorting = val[0];
		let test=JSON.parse(JSON.stringify(model.ForbiddenYears));
        model.ForbiddenYears=[...test,...val[1]];
		//console.log(test);
		//console.log(model.ForbiddenYears);
		
	}
	function getRndInteger(min, max) {
		//This function is borrowed from a website
		return Math.floor(Math.random() * (max - min + 1) ) + min;
	  }
	function convertACB(val){
		//console.log(val);
		if(!(Array.isArray(val))){
			val=[val,null];
		}
		if (val[0]==null)
		{
			//console.log(val[1]);
			return val[1];
		}
		else{
			return {"event":val[0].event,"year":val[0].year.toString(),"month": val[0].month.toString(),"day": val[0].day.toString()};
		}

	}
	function convertOtherACB(val){
		return val[0].map(convertACB);
	}
	function testACB(val){
		//console.log(val);
		return [val[0][Math.floor(Math.random()*val[0].length)],val[1]];
	}
	function objectFilter(listVal){
		let send=[];
		let yearTrack=[];
		let track=[];
		for(let i=0; i<listVal.length;i++){
			if(!(typeof listVal[i] == 'object')){
				//console.log("yes sir");
				yearTrack.push(listVal[i]);

			}
			else{
			if(!(containsObject(track,(listVal[i].event)))){
				send.push(listVal[i])
				track.push(listVal[i].event)
			}}
		}
		//console.log(yearTrack);
		return [send,yearTrack];
	}
	function containsObject(list, obj) {
		var i;
		for (i = 0; i < list.length; i++) {
			if (list[i] === obj) {
				return true;
			}
		}
	
		return false;
	}
}
