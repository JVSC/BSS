var marker = 1;
var marker2 = 0;
var team = document.getElementById("team").innerHTML;
//find match-up for pokemon's typing
function findPokemonType(pokemon){
	var W = [];
	var R = [];
	
	for(var i=0; pokemon.type[0]!=Typing[i].type; i++){
	}
	
	for(var i2=0; i2<Typing[i].weaknesses.length; i2++){
		W.push(Typing[i].weaknesses[i2]);		
	}

	for(var i2=0; i2<Typing[i].resistances.length; i2++){
		R.push(Typing[i].resistances[i2]);		
	}

	if(pokemon.type[0]!=pokemon.type[1]){
	
		for(var i=0; pokemon.type[1]!=Typing[i].type; i++){
		}
		for(var i2=0; i2<Typing[i].weaknesses.length; i2++){
			if(W.indexOf(Typing[i].weaknesses[i2])==-1){
				W.push(Typing[i].weaknesses[i2])
			}
		}

		for(var i=0; pokemon.type[1]!=Typing[i].type; i++){
		}
		for(var i2=0; i2<Typing[i].resistances.length; i2++){
			if(R.indexOf(Typing[i].resistances[i2])==-1){
				R.push(Typing[i].resistances[i2])
			}
		}
	}

	for(var i=0; i<R.length;i++){
		var index = W.indexOf(R[i])
		if(index!=-1){
			W.splice(index, 1)
		}
	}
	return W;
}

function teamButton () {

	var addButton = document.getElementById("add2team");
	
	var htmlCollection = document.getElementsByClassName("members");
	var t_members = Array.prototype.slice.call(htmlCollection);
	var threatsList = document.getElementById("threat-list");

	var value = addButton.getAttribute("value");
	var pokemon = findPokemonById(value);
	var pkmnHolder = document.getElementById("t"+marker);
	//console.log(marker);
	activateTeamButton(t_members,threatsList,value,pokemon,pkmnHolder,addButton);
	setStatsDistribution(t_members);
}

function findTeamIds(t_members){
	
	var ids = [];

	for(var i = 0; i< t_members.length; i++){
		if(t_members[i].getAttribute("value")==-1){
			t_members.splice(i,1);
			i--;
		}else{
			ids.push(t_members[i].getAttribute("value"))
		}
	}

	return ids;	
}

function getThreats(id){
	
	var aux;
	var threatList = [];
	var coverList = [];

	for(var i=0; i<id.length; i++){
		
		for(var i2=0; metaData[i2].id!=id[i];i2++){
		}

		for(var i3=0; i3<metaData[i2].checks.length; i3++){
			threatList.push(metaData[i2].checks[i3])
		}
		
		aux = findGoodMatchUpsById(id[i]);
		
		for(var i4=0; i4<aux.length; i4++){
			coverList.push(aux[i4]);
		}
		
	}

	var countsT = {};
	var countsC = {};

	threatList.forEach(function(x) {
    	countsT[x] = (countsT[x] || 0) + 1;
	});

	coverList.forEach(function(x) {
		countsC[x] = (countsC[x] || 0) + 1;
	})

	Object.keys(countsT).forEach(function(key,index) {
    	if(countsC[key]!==undefined){
    		countsT[key]-=countsC[key]
    	}
    	if(countsT[key]<1){
    		delete countsT[key]
    	}
    });

	return countsT;
}

function setThreats(threatsList, t_members, countSet){
	var ids = findTeamIds(t_members);
	var threats = getThreats(ids);
	var sortedThreats = Object.keys(threats);
	//console.log(sortedThreats)
	threatsList.innerHTML="";

	for(var i=0; i<21 && i<sortedThreats.length; i++){
		threatsList.innerHTML +=  "<section value=\""+sortedThreats[i]+"\" id =\"tr"+i+countSet+"\" class=\"threats\"><img src=\"https://www.serebii.net/pokedex-sm/icon/"+sortedThreats[i]+".png\"\\></section>";
		if(threats[sortedThreats[i]]==2){
			document.getElementById("tr"+i+countSet).style.backgroundColor = "rgba(51, 0, 0, 0.5)";	
		}else if(threats[sortedThreats[i]]==3){
			document.getElementById("tr"+i+countSet).style.backgroundColor = "rgba(102, 0, 0, 0.75)";
		}else if (threats[sortedThreats[i]]==4){
			document.getElementById("tr"+i+countSet).style.backgroundColor = "rgba(153, 0, 0, 0.875)";
		}else if(threats[sortedThreats[i]]==5){
			document.getElementById("tr"+i+countSet).style.backgroundColor = "rgba(204, 0, 0, 0.9)";
		}else if(threats[sortedThreats[i]]>5){
			document.getElementById("tr"+i+countSet).style.backgroundColor = "rgba(255, 0, 0, 1)";
		}
	}

	threats1 = document.getElementsByClassName("threats");
	for(var i=0; i<threats1.length; i++){
		threats1[i].addEventListener("click", function(){
			id = this.getAttribute("value");
			pokemonThumbnail(id);
			pokemonStats(id,0);
			pokemonMoveset(id,0);
			pokemonMovesetOptions(id);
			pokemonChecksAndCounters(id);
			bootUpButtons(id);
		});
	}
	
}
// find type weaknesses 
function setTeamMatchUp(pkmnValue){

	var weaknessCount;
	var counter;
	var pkmn = findPokemonById(pkmnValue);
	var matchup = findPokemonType(pkmn);

	for(var i=0; i<matchup.length; i++){
		weaknessCount = document.getElementById(matchup[i])
		counter = Number(weaknessCount.innerText);
		counter++;
		weaknessCount.innerText = counter
		if(counter==1){
			weaknessCount.style.color = "#fcfbae"
		}else if(counter==2){
			weaknessCount.style.color = "#ff8e5e"
		}else{
			weaknessCount.style.color = "#ff5e5e"
		}
	}

	return matchup
}

function setStatsDistribution(t_members){

	var ids = findTeamIds(t_members)
	var pkmn = [];
	var stats = [];
	stats.push(document.getElementsByClassName("HPoints"))
	stats.push(document.getElementsByClassName("Attack"))
	stats.push(document.getElementsByClassName("Defense"))
	stats.push(document.getElementsByClassName("SpA"))
	stats.push(document.getElementsByClassName("SpD"))
	stats.push(document.getElementsByClassName("Speed"))
	
	var statsTotal = {
		hp:0,
		atk:0,
		def:0,
		spa:0,
		spd:0,
		spe:0
	}
	
	for(var i = 0; i < ids.length; i++){
		pkmn.push(findPokemonById(ids[i]));
	}
	
	for(var i = 0; i < pkmn.length; i++){
		statsTotal.hp += pkmn[i].stats.HP/(marker-1)
		statsTotal.atk += pkmn[i].stats.Atk/(marker-1)
		statsTotal.def += pkmn[i].stats.Def/(marker-1)
		statsTotal.spa += pkmn[i].stats.SpA/(marker-1)
		statsTotal.spd += pkmn[i].stats.SpD/(marker-1)
		statsTotal.spe += pkmn[i].stats.Spe/(marker-1)
	}

	for(var i = 0; i < stats.length; i++){
		for(var i2 = stats[i].length-1; i2 >= 0; i2-- ){
			stats[i][i2].style.visibility="hidden";
		}
	}

	for(var i = 0; i < stats.length; i++){
		for(var i2 = stats[i].length-1; i2 >= 0; i2-- ){
			if(statsTotal.hp>40 && i == 0){
				stats[i][i2].style.visibility="visible"
				statsTotal.hp -= (25/((marker/10)+0.5))
			}else if(statsTotal.atk>45 && i == 1){
				stats[i][i2].style.visibility="visible"
				statsTotal.atk -= (25/((marker/10)+0.5))
			}else if(statsTotal.def>45 && i == 2){
				stats[i][i2].style.visibility="visible"
				statsTotal.def -= (25/((marker/10)+0.5))
			}else if(statsTotal.spa>45 && i == 3){
				stats[i][i2].style.visibility="visible"
				statsTotal.spa -= (25/((marker/10)+0.5))
			}else if(statsTotal.spd>45 && i == 4){
				stats[i][i2].style.visibility="visible"
				statsTotal.spd -= (25/((marker/10)+0.5))
			}else if(statsTotal.spe>45 && i == 5){
				stats[i][i2].style.visibility="visible"
				statsTotal.spe -= (25/((marker/10)+0.5))
			}
		}
	}
}

function activateTeamButton(t_members,threatsList,value,pokemon,pkmnHolder,addButton){
	if(marker<7){

		pkmnHolder.innerHTML = "<img src=\"https://www.serebii.net/pokedex-sm/icon/"+pokemon.id+".png\"\\>";
		pkmnHolder.setAttribute("value", value);

		pkmnHolder.addEventListener("click", function(){
			id=pkmnHolder.getAttribute("value")
			pokemonThumbnail(id);
			pokemonStats(id,0);
			pokemonMoveset(id, 0);
			pokemonMovesetOptions(id);
			pokemonChecksAndCounters(id);
			bootUpButtons(id);
		});

		setTeamMatchUp(value);
		setThreats(threatsList,t_members, "a");
		
		var htmlCollection = document.getElementsByClassName("threats");
		var t_threats = Array.prototype.slice.call(htmlCollection);
		var teamList = document.getElementById("team-list");

		setThreats(teamList,t_threats, "b");

		marker++;
	}
}

function bootRunReset() {
	reset = document.getElementById("reset2");
	reset.addEventListener("click", function(){
		var teamReset = document.getElementById("team");
		teamReset.innerHTML = team;
		marker=1;
		selectorsFunc();
		bootRunReset();
	})
}




