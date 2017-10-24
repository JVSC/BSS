//updates thumbnail	
var pokemonThumbnail = function(id){
	var selectedPokemon = findPokemonById(id);
	var pkmnSpriteBackground = document.getElementById("poke-portrait");
	var addButton = document.getElementById("add2team");
	//removeButton.addEventListener("click", );
	addButton.setAttribute("value", id);
	addButton.addEventListener("click", teamButton);

	// Manipulating DOM [pokemon's name & 3d sprite]
	document.querySelector("#pkmn-name").innerHTML=selectedPokemon.actualName;
	document.querySelector("#poke-pic").src="https://play.pokemonshowdown.com/sprites/xyani/"+selectedPokemon.name+".gif";

	pkmnSpriteBackground.removeAttribute("class", "pokemon-"+selectedPokemon.type[0])
	pkmnSpriteBackground.classList.add("pokemon-"+selectedPokemon.type[0]);
}
// updates stats
var pokemonStats = function(id, set){
	var stats = setStats(id, set)
	var counter = 125;
	var n_stars=0;

	while(counter<stats[0][1]){
		if(n_stars<5){
			stats[0][0].innerHTML+="<img class=\"size-of-star\" src=assets/icons/Star.png>";
		}else if(n_stars==5){
			stats[0][0].innerHTML+="<img class=\"size-of-star\" src=assets/icons/Star-max.png>";
		}else{
			stats[0][0].innerHTML+="<img class=\"size-of-star\" src=assets/icons/Star-max1.png>";
		}
		counter+=30;
		n_stars++;
	}

	n_stars=0
	counter=0;
	
	for (var i = 1; i<stats.length; i++){
		while(counter<stats[i][1]){
			if(n_stars<4){
				stats[i][0].innerHTML+="<img class=\"size-of-star\" src=assets/icons/Star.png>";
			}else{
				stats[i][0].innerHTML+="<img class=\"size-of-star\" src=assets/icons/Star-max.png>";
			}
			counter+=54;
			n_stars++;
		}
		counter=0;
		n_stars=0;
	}
}
//updates moveset
var pokemonMoveset = function(id, set){
	var selectedMoveset = findMovesetById(id);
	var evSpread = function(){
		var evs = [];
		if(selectedMoveset.set[set].HP){
			evs.push(selectedMoveset.set[set].HP,"Hp")
		};
		if(selectedMoveset.set[set].Atk){
			evs.push(selectedMoveset.set[set].Atk,"Atk")
		};
		if(selectedMoveset.set[set].Def){
			evs.push(selectedMoveset.set[set].Def,"Def")
		};
		if(selectedMoveset.set[set].SpA){
			evs.push(selectedMoveset.set[set].SpA,"SpA")
		};
		if(selectedMoveset.set[set].SpD){
			evs.push(selectedMoveset.set[set].SpD,"SpD")
		};
		if(selectedMoveset.set[set].Spe){
			evs.push(selectedMoveset.set[set].Spe,"Spe")
		};
		return evs;
	}
	
	var evTraining = evSpread();
	var m = [];

	var nature=document.getElementById("nature"); 
	var ability=document.getElementById("ability");
	var item=document.getElementById("item");
	var evs=document.getElementById("evs");
	m.push(document.getElementById("m1"));
	m.push(document.getElementById("m2"));
	m.push(document.getElementById("m3"));
	m.push(document.getElementById("m4"));


	nature.innerText=selectedMoveset.set[set].nature
	ability.innerText=selectedMoveset.set[set].ability
	item.innerText=selectedMoveset.set[set].items
	evs.innerText="";
	for(var i=0; i<evTraining.length; i++){
		evs.innerText+=" "+evTraining[i];
	} 
	for(var i=0; i<selectedMoveset.set[set].moves.length; i++){
		m[i].innerText=selectedMoveset.set[set].moves[i];
	}	
}
//updates the button list
var pokemonMovesetOptions = function(id){
	setButtons(id);
}
// updates pokemon's checks and counters list
var pokemonChecksAndCounters = function(id){
	setMetaData(id);
}