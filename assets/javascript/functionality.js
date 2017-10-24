// searches for a certain pokemon according to its ID (National Dex number)
function findPokemonById(id){
	for(var cont = 0; Pokemon[cont].id!==id; cont++){
	}
	return Pokemon[cont];
}
// searching for a moveset corresponding to the pokemon's ID
function findMovesetById(id){
	for(var cont = 0; setData[cont].id!==id; cont++){
	}
	return setData[cont];
}
// searches for good match ups for x pokemon based on its ID
function findGoodMatchUpsById(id){
	var goodMatchUps = [];
	for(var cont=0; cont < metaData.length; cont ++){	
		if(metaData[cont].checks.indexOf(id)!=-1){
			if(goodMatchUps.indexOf(metaData[cont].id)==-1){
				goodMatchUps.push(metaData[cont].id)
			}
		}
	}
	return goodMatchUps
}
// searches for x pokemon's checks and counters
function getMetaData(id){
	for(var cont = 0; metaData[cont].id!==id; cont++){
	}
	return metaData[cont]
}
//fetching base stats
function getBaseStats (id){
	var selectedPkmn = findPokemonById(id);
	var stats = {
		HP : selectedPkmn.stats.HP,
		Atk : selectedPkmn.stats.Atk,
		Def : selectedPkmn.stats.Def,
		SpA : selectedPkmn.stats.SpA,
		SpD : selectedPkmn.stats.SpD,
		Spe : selectedPkmn.stats.Spe
	};
	return stats;
}
//fetching DOM Elements (stats table)
function getStats(){
	var stats = {
		hp:document.getElementById("hp").innerHTML,
		atk:document.getElementById("atk").innerHTML,
		def:document.getElementById("def").innerHTML,
		spa:document.getElementById("spa").innerHTML,
		spd:document.getElementById("spd").innerHTML,
		spe:document.getElementById("spe").innerHTML
	}
	return stats;
}
//sets x pokemon's top checks and counters/ sample team and add eventListeners
function setMetaData(id){
	
	var html = document.getElementById("counter");
	var html2 = document.getElementById("fav");
	var setData = getMetaData(id)
	var setData2 = findGoodMatchUpsById(id);
	
	html.innerHTML = "";
	html2.innerHTML = "";

	for(var i = 0; i < setData.checks.length && i<5; i++){
		html.innerHTML += "<img class=\"checks\" id=\""+setData.checks[i]+"\" src=\"https://www.serebii.net/pokedex-sm/icon/"+setData.checks[i]+".png\">";
	}

	for(var i = 0; i < setData2.length && i<10; i++){
		html2.innerHTML += "<img class=\"checks\" id=\""+setData2[i]+"\" src=\"https://www.serebii.net/pokedex-sm/icon/"+setData2[i]+".png\">";
	}
}
//manipulates the stats table & returns their html
function setStats(id, set){
	var selectedBaseStats = trainStats(id, set);

	document.getElementById("HP").innerHTML=selectedBaseStats.HP;
	document.getElementById("Atk").innerHTML=selectedBaseStats.Atk;
	document.getElementById("Def").innerHTML=selectedBaseStats.Def;
	document.getElementById("SpA").innerHTML=selectedBaseStats.SpA;
	document.getElementById("SpD").innerHTML=selectedBaseStats.SpD;
	document.getElementById("Spe").innerHTML=selectedBaseStats.Spe;
	
	document.getElementById("hp").innerHTML=""; 
	document.getElementById("atk").innerHTML="";
	document.getElementById("def").innerHTML="";
	document.getElementById("spa").innerHTML="";
	document.getElementById("spd").innerHTML="";
	document.getElementById("spe").innerHTML="";

	var domManipulation = [
		[document.getElementById("hp") , selectedBaseStats.HP],
		[document.getElementById("atk") , selectedBaseStats.Atk],
		[document.getElementById("def") , selectedBaseStats.Def],
		[document.getElementById("spa") , selectedBaseStats.SpA],
		[document.getElementById("spd") , selectedBaseStats.SpD],
		[document.getElementById("spe") , selectedBaseStats.Spe]
	]
	return domManipulation;
}
//creates moveset buttons and event listeners
function setButtons (id){
	var moveset = findMovesetById(id);
	var button = document.getElementById("moveset-button");
	button.innerHTML="";
	for (var i = 0; i<moveset.set.length; i++){
		button.innerHTML += "<button class=\"set\" value="+i+"\>"+moveset.set[i].setname+"</button>";
	}
}
//adding event listeners
function bootUpButtons(id){
	setButtons(id);
	var event = document.getElementsByClassName("set");
	for(var i=0; i<event.length; i++){
		event[i].addEventListener("click", function(){
			setStats(id, this.getAttribute("value"));
			pokemonStats(id, this.getAttribute("value"));
			pokemonMoveset(id, this.getAttribute("value"));
		})
	}
}
//calculating trained stats 
function trainStats(id, target){
	selectedPokemon = getBaseStats(id);
	selectedMoveset = findMovesetById(id);
	selectedNature = getNatureValue(id, target);
	
	selectedPokemon.HP = Math.floor(((2*selectedPokemon.HP + 31 + selectedMoveset.set[target].HP/4 )*50)/100)+60;
	selectedPokemon.Atk = Math.floor(Math.floor((((2 * selectedPokemon.Atk + 31 + selectedMoveset.set[target].Atk/4 ) * 50)/100)+5)*selectedNature.Atk);
	selectedPokemon.Def = Math.floor(Math.floor((((2 * selectedPokemon.Def + 31 + selectedMoveset.set[target].Def/4) * 50)/100)+5)*selectedNature.Def);
	selectedPokemon.SpA = Math.floor(Math.floor((((2 * selectedPokemon.SpA + 31 + selectedMoveset.set[target].SpA/4) * 50)/100)+5)*selectedNature.SpA);
	selectedPokemon.SpD = Math.floor(Math.floor((((2 * selectedPokemon.SpD + 31 + selectedMoveset.set[target].SpD/4) * 50)/100)+5)*selectedNature.SpD);
	selectedPokemon.Spe = Math.floor(Math.floor((((2 * selectedPokemon.Spe + 31 + selectedMoveset.set[target].Spe/4) * 50)/100)+5)*selectedNature.Spe);
	
	return selectedPokemon;
}