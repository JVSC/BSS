function getNatureValue (id, target){
	var selectedPkmn = findMovesetById(id);
	switch(selectedPkmn.set[target].nature){
		case "Jolly":{
			var stats = {
				HP : 1,
				Atk : 1,
				Def : 1,
				SpA : 0.9,
				SpD : 1,
				Spe : 1.1
			}
			return stats
		}break;
		case "Brave":{
			var stats = {
				HP : 1,
				Atk : 1.1,
				Def : 1,
				SpA : 1,
				SpD : 1,
				Spe : 0.9
			}
			return stats
		}break;
		case "Bold":{
			var stats = {
				HP : 1,
				Atk : 0.9,
				Def : 1.1,
				SpA : 1,
				SpD : 1,
				Spe : 1
			}
			return stats
		}break;
		case "Sassy":{
			var stats = {
				HP : 1,
				Atk : 1,
				Def : 1,
				SpA : 1,
				SpD : 1.1,
				Spe : 0.9
			}
			return stats
		}break;
		case "Modest":{
			var stats = {
				HP : 1,
				Atk : 0.9,
				Def : 1,
				SpA : 1.1,
				SpD : 1,
				Spe : 1
			}
			return stats
		}break;
		case "Quiet":{
			var stats = {
				HP : 1,
				Atk : 1,
				Def : 1,
				SpA : 1.1,
				SpD : 1,
				Spe : 0.9
			}
			return stats
		}break;
		case "Relaxed":{
			var stats = {
				HP : 1,
				Atk : 1,
				Def : 1.1,
				SpA : 1,
				SpD : 1,
				Spe : 0.9
			}
			return stats
		}break;
		case "Timid":{
			var stats = {
				HP : 1,
				Atk : 0.9,
				Def : 1,
				SpA : 1,
				SpD : 1,
				Spe : 1.1
			}
			return stats
		}break;
		case "Impish":{
			var stats = {
				HP : 1,
				Atk : 1,
				Def : 1.1,
				SpA : 0.9,
				SpD : 1,
				Spe : 1
			}
			return stats
		}break;
		case "Calm":{
			var stats = {
				HP : 1,
				Atk : 0.9,
				Def : 1,
				SpA : 1,
				SpD : 1.1,
				Spe : 1
			}
			return stats
		}break;
		case "Careful":{
			var stats = {
				HP : 1,
				Atk : 1,
				Def : 1,
				SpA : 0.9,
				SpD : 1.1,
				Spe : 1
			}
			return stats
		}break;
		case "Adamant":{
			var stats = {
				HP : 1,
				Atk : 1.1,
				Def : 1,
				SpA : 0.9,
				SpD : 1,
				Spe : 1
			}
			return stats
		}break;
		case "Naive":{
			var stats = {
				HP : 1,
				Atk : 1,
				Def : 1,
				SpA : 1,
				SpD : 0.9,
				Spe : 1.1
			}
			return stats
		}break;
		case "Quiet":{
			var stats = {
				HP : 1,
				Atk : 1,
				Def : 1,
				SpA : 1.1,
				SpD : 1,
				Spe : 0.9
			}
			return stats
		}break;
	}
}