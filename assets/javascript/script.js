/// responsible for creating all pokemon icons at the bottom of the page & adding event listeners when teh page loads
var resett = function(){
	document.querySelector("#pkmn-container").innerHTML = " ";
	Pokemon.forEach(function(){
		document.querySelector("#pkmn-container").innerHTML += "<img class=\"pokemon\" src=\"\">";
	});	

	var pokemonIcon = document.querySelectorAll(".pokemon");
	var filterButtons = document.querySelectorAll(".click-role-active");
	
	for( var i = 0; i<Pokemon.length; i++){
		pokemonIcon[i].src="https://www.serebii.net/pokedex-sm/icon/"+Pokemon[i].id+".png";
		pokemonIcon[i].classList.add("pokemon-"+Pokemon[i].type[0]);
		pokemonIcon[i].classList.add("pokemon-"+Pokemon[i].type[1]+"-border");
		pokemonIcon[i].setAttribute("id", Pokemon[i].id);
		// adding a listener to each icon as they're created
		pokemonIcon[i].addEventListener("click", function(){
			id = this.getAttribute("id");
			pokemonThumbnail(id);
			pokemonStats(id,0);
			pokemonMoveset(id,0);
			pokemonMovesetOptions(id);
			pokemonChecksAndCounters(id);
			bootUpButtons(id);
			console.clear();
			console.log("checks:"+"\""+c);
		});
	}
	
	for( i = 0; i < filterButtons.length; i++){
		filterButtons[i].classList.remove("click-role-active");
	}
}
// Pokemon Role Filter
var filter = function(button){
	var pkmon = document.querySelectorAll(".pokemon");
	var i = 0; 
	Pokemon.forEach(function(pkmn){
		if(pkmn.role.indexOf(button.getAttribute("value"))===-1){
			pkmon[i].classList.add("hidden");
		}
		button.classList.add("click-role-active");
		i++;
	})
}

function bootUpFilters(){
	event = document.querySelectorAll(".click-role");
	for(var i = 0; i<event.length; i++){
		event[i].addEventListener("click", function(){
			if(this.getAttribute("value")==="All"){
				resett();
			}else{
				filter(this);
			}
		});
	}
}

function searchList (){
	list = document.getElementById("items")
	Pokemon.sort(function(a, b){
	    if(a.actualName < b.actualName) return -1;
	    if(a.actualName > b.actualName) return 1;
	    return 0;
	});
	for(var i = 0; i < Pokemon.length; i++){
		list.innerHTML += "<option value=\""+ Pokemon[i].id +"\">"+Pokemon[i].actualName+"</option>"
	}
}

resett();
pokemonThumbnail("681-b");
pokemonStats("681-b",0);
pokemonMoveset("681-b", 0);
pokemonMovesetOptions("681-b");
pokemonChecksAndCounters("681-b");
bootUpButtons("681-b");
bootUpFilters();
bootRunReset();
searchList();

var select = document.getElementById("items");
select.addEventListener("change", function(){
	id=this.value;
	pokemonThumbnail(id);
	pokemonStats(id,0);
	pokemonMoveset(id, 0);
	pokemonMovesetOptions(id);
	pokemonChecksAndCounters(id);
	bootUpButtons(id);
	this.selectedIndex = 0
})
resett();