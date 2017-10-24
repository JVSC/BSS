var Pokemon = [
		{	
			id:"778",
			name:"mimikyu",
			actualName:"Mimikyu",
			type:["ghost","fairy"],
			role:["Attacker-Physical", "Revenge Killer", "Support", "Set-up Sweeper"],
			stats:{
				HP : 55,
				Atk : 90,
				Def : 80,
				SpA : 50,
				SpD : 105,
				Spe : 96
			}	
		},	
		{
			id:"645-s",
			name:"landorus-therian",
			actualName:"Landorus-T",  
			type:["ground","flying"],
			role:["Pivot", "Support", "Set-up Sweeper", "Attacker-Physical"],
			stats:{
				HP :89,
				Atk :145,
				Def :90,
				SpA :105,
				SpD :80,
				Spe :91
			}
		},
		{	
			id:"785",
			name:"tapukoko",
			actualName:"Tapu Koko",
			type:["electric","fairy"],
			role:["Attacker-Physical", "Attacker-Special", "Revenge Killer", "Pivot", "Set-up Sweeper"],
			stats:{
				HP : 70,
				Atk : 115,
				Def : 85,
				SpA : 95,
				SpD : 75,
				Spe : 130
			}	
		},
		{	
			id:"786",
			name:"tapulele",
			actualName:"Tapu Lele",
			type:["psychic","fairy"],
			role:["Attacker-Special", "Revenge Killer"],
			stats:{
				HP : 70,
				Atk : 85,
				Def : 75,
				SpA : 130,
				SpD : 115,
				Spe : 95
			}	
		},
		{	
			id:"257",
			name:"blaziken",
			actualName:"Blaziken",
			type:["fire","fighting"],
			role:["Attacker-Mixed", "Revenge Killer", "Set-up Sweeper"],
			stats:{
				HP : 80,
				Atk : 120,
				Def : 70,
				SpA : 110,
				SpD : 70,
				Spe : 80
			}	
		},
		{	
			id:"257-m",
			name:"blaziken-mega",
			actualName:"Blaziken-Mega",
			type:["fire","fighting"],
			role:["Attacker-Physical", "Set-up Sweeper", "Mega"],
			stats:{
				HP : 80,
				Atk : 160,
				Def : 80,
				SpA : 130,
				SpD : 80,
				Spe : 100
			}	
		},
		{	
			id:"006",
			name:"charizard",
			actualName:"Charizard",
			type:["fire","flying"],
			role:[""],
			stats:{
				HP : 78,
				Atk : 84,
				Def : 78,
				SpA : 109,
				SpD : 85,
				Spe : 100
			}	
		},
		{	
			id:"006-mx",
			name:"charizard-megax",
			actualName:"Charizard-Mega X",
			type:["fire","dragon"],
			role:["Mega", "Attacker-Physical", "Set-up Sweeper"],
			stats:{
				HP : 78,
				Atk : 130,
				Def : 111,
				SpA : 130,
				SpD : 85,
				Spe : 100
			}	
		},
		{	
			id:"006-my",
			name:"charizard-megay",
			actualName:"Charizard-Mega Y",
			type:["fire","flying"],
			role:["Mega", "Attacker-Special", "Set-up Sweeper"],
			stats:{
				HP : 78,
				Atk : 104,
				Def : 78,
				SpA : 159,
				SpD : 115,
				Spe : 100
			}	
		},
		{	
			id:"373",
			name:"salamence",
			actualName:"Salamence",
			type:["dragon","flying"],
			role:[""],
			stats:{
				HP : 95,
				Atk : 135,
				Def : 80,
				SpA : 110,
				SpD : 80,
				Spe : 100
			}	
		},
		{	
			id:"373-m",
			name:"salamence-mega",
			actualName:"Salamence-Mega",
			type:["dragon","flying"],
			role:["Mega", "Set-Up Sweeper", "Attacker-Physical"],
			stats:{
				HP : 95,
				Atk : 145,
				Def : 130,
				SpA : 120,
				SpD : 90,
				Spe : 120
			}	
		},
		{	
			id:"130",
			name:"gyarados",
			actualName:"Gyarados",
			type:["water","flying"],
			role:["Set-Up Sweeper", "Support", "Attacker-Physical"],
			stats:{
				HP : 95,
				Atk : 125,
				Def : 79,
				SpA : 60,
				SpD : 100,
				Spe : 81
			}	
		},
		{	
			id:"130-m",
			name:"gyarados-mega",
			actualName:"Gyarados-Mega",
			type:["water","dark"],
			role:["Mega", "Set-Up Sweeper", "Attacker-Physical"],
			stats:{
				HP : 95,
				Atk : 155,
				Def : 109,
				SpA : 70,
				SpD : 130,
				Spe : 81
			}	
		},
		{	
			id:"658",
			name:"greninja",
			actualName:"Greninja",
			type:["water","dark"],
			role:["Set-Up Sweeper", "Revenge Killer", "Attacker-Special", "Attacker-Mixed"],
			stats:{
				HP : 72,
				Atk : 95,
				Def : 67,
				SpA : 103,
				SpD : 71,
				Spe : 122
			}	
		},
		{	
			id:"788",
			name:"tapufini",
			actualName:"Tapu Fini",
			type:["water","fairy"],
			role:["Set-Up Sweeper", "Support", "Wall-Physical", "Attacker-Special"],
			stats:{
				HP : 70,
				Atk : 75,
				Def : 115,
				SpA : 95,
				SpD : 130,
				Spe : 85
			}	
		},
		{	
			id:"450",
			name:"hippowdon",
			actualName:"Hippowdon",
			type:["ground","ground"],
			role:["Support", "Wall-Physical", "Wall-Special"],
			stats:{
				HP : 108,
				Atk : 112,
				Def : 118,
				SpA : 68,
				SpD : 72,
				Spe : 47
			}	
		},
		{	
			id:"681",
			name:"aegislash",
			actualName:"Aegislash (shield)",
			type:["steel","ghost"],
			role:["Support", "Attacker-Special", "Attacker-Physical", "Attacker-Mixed", "Revenge Killer"],
			stats:{
				HP : 60,
				Atk : 50,
				Def : 150,
				SpA : 50,
				SpD : 150,
				Spe : 60
			}	
		},
		{	
			id:"681-b",
			name:"aegislash-blade",
			actualName:"Aegislash (blade)",
			type:["steel","ghost"],
			role:["Support", "Attacker-Special", "Attacker-Physical", "Attacker-Mixed", "Revenge Killer"],
			stats:{
				HP : 60,
				Atk : 150,
				Def : 50,
				SpA : 150,
				SpD : 50,
				Spe : 60
			}	
		},
		{	
			id:"233",
			name:"porygon2",
			actualName:"Porygon2",
			type:["normal","normal"],
			role:["Support", "Wall-Physical", "Wall-Special", "Wall-Mixed"],
			stats:{
				HP : 85,
				Atk : 80,
				Def : 90,
				SpA : 105,
				SpD : 95,
				Spe : 60
			}	
		},
		{	
			id:"598",
			name:"ferrothorn",
			actualName:"Ferrothorn",
			type:["grass","steel"],
			role:["Support", "Wall-Physical", "Wall-Mixed"],
			stats:{
				HP : 74,
				Atk : 94,
				Def : 131,
				SpA : 54,
				SpD : 116,
				Spe : 20
			}	
		},
		{	
			id:"445",
			name:"garchomp",
			actualName:"Garchomp",
			type:["dragon","ground"],
			role:["Revenge Killer", "Attacker-Physical"],
			stats:{
				HP : 108,
				Atk : 130,
				Def : 95,
				SpA : 80,
				SpD : 85,
				Spe : 102
			}	
		},
		{	
			id:"797",
			name:"celesteela",
			actualName:"Celesteela",
			type:["steel","flying"],
			role:["Support", "Attacker-Physical", "Attacker-Special", "Wall-Physical", "Wall-Special"],
			stats:{
				HP : 97,
				Atk : 101,
				Def : 103,
				SpA : 107,
				SpD : 101,
				Spe : 61
			}	
		},
		{	
			id:"642-s",
			name:"thundurus-therian",
			actualName:"Thundurus-T",
			type:["electric","flying"],
			role:["Attacker-Special", "Revenge Killer"],
			stats:{
				HP : 79,
				Atk : 105,
				Def : 70,
				SpA : 145,
				SpD : 80,
				Spe : 101
			}	
		},
		{	
			id:"094",
			name:"gengar",
			actualName:"Gengar",
			type:["ghost","poison"],
			role:["Attacker-Special", "Revenge Killer"],
			stats:{
				HP : 60,
				Atk : 65,
				Def : 60,
				SpA : 130,
				SpD : 75,
				Spe : 110
			}	
		},
		{	
			id:"094-m",
			name:"gengar-mega",
			actualName:"Gengar-Mega",
			type:["ghost","poison"],
			role:["Support", "Attacker-Special", "Mega"],
			stats:{
				HP : 60,
				Atk : 65,
				Def : 80,
				SpA : 170,
				SpD : 95,
				Spe : 130
			}	
		},
		{	
			id:"473",
			name:"mamoswine",
			actualName:"Mamoswine",
			type:["ice","ground"],
			role:["Attacker-Physical", "Revenge Killer"],
			stats:{
				HP : 110,
				Atk : 130,
				Def : 80,
				SpA : 70,
				SpD : 60,
				Spe : 80
			}	
		},
		{	
			id:"286",
			name:"breloom",
			actualName:"Breloom",
			type:["grass","fighting"],
			role:["Attacker-Physical", "Revenge Killer"],
			stats:{
				HP : 60,
				Atk : 130,
				Def : 80,
				SpA : 60,
				SpD : 60,
				Spe : 70
			}	
		},
		{
			id:"376",
			name:"metagross",
			actualName:"Metagross",  
			type:["steel","psychic"],
			role:[""],
			stats:{
				HP :80,
				Atk :135,
				Def :130,
				SpA :95,
				SpD :90,
				Spe :70
			}
		},
		{
			id:"376-m",
			name:"metagross-mega",
			actualName:"Metagross-Mega",  
			type:["steel","psychic"],
			role:["Attacker-Physical", "Mega"],
			stats:{
				HP :80,
				Atk :145,
				Def :150,
				SpA :105,
				SpD :110,
				Spe :110
			}
		},
		{
			id:"485",
			name:"heatran",
			actualName:"Heatran",  
			type:["fire","steel"],
			role:["Attacker-Special", "Support"],
			stats:{
				HP :91,
				Atk :90,
				Def :106,
				SpA :130,
				SpD :106,
				Spe :77
			}
		},
		{
			id:"448",
			name:"lucario",
			actualName:"Lucario",  
			type:["fighting","steel"],
			role:[""],
			stats:{
				HP :70,
				Atk :110,
				Def :70,
				SpA :115,
				SpD :70,
				Spe :90
			}
		},
		{
			id:"448-m",
			name:"lucario-mega",
			actualName:"Lucario-Mega",  
			type:["fighting","steel"],
			role:["Attacker-Special", "Attacker-Physical", "Revenge Killer", "Mega"],
			stats:{
				HP :70,
				Atk :145,
				Def :88,
				SpA :140,
				SpD :70,
				Spe :112
			}
		},	
		{
			id:"248",
			name:"tyranitar",
			actualName:"Tyranitar",  
			type:["rock","dark"],
			role:["Support", "Set-up Sweeper", "Attacker-Physical"],
			stats:{
				HP :100,
				Atk :134,
				Def :110,
				SpA :95,
				SpD :100,
				Spe :61
			}
		},
		{
			id:"248-m",
			name:"tyranitar-mega",
			actualName:"Tyranitar-Mega",  
			type:["rock","dark"],
			role:["Set-up Sweeper", "Attacker-Physical","Mega"],
			stats:{
				HP :100,
				Atk :164,
				Def :150,
				SpA :95,
				SpD :120,
				Spe :71
			}
		},
		{
			id:"184",
			name:"azumarill",
			actualName:"Azumarill",  
			type:["water","fairy"],
			role:["Set-up Sweeper", "Attacker-Physical"],
			stats:{
				HP :100,
				Atk :50,
				Def :80,
				SpA :60,
				SpD :80,
				Spe :50
			}
		},
		{
			id:"115",
			name:"kangaskhan",
			actualName:"Kangaskhan",  
			type:["normal","normal"],
			role:[""],
			stats:{
				HP :105,
				Atk :95,
				Def :80,
				SpA :40,
				SpD :80,
				Spe :90
			}
		},
		{
			id:"115-m",
			name:"kangaskhan-mega",
			actualName:"Kangaskhan-Mega",  
			type:["normal","normal"],
			role:["Set-up Sweeper", "Attacker-Physical", "Attacker-Mixed", "Mega"],
			stats:{
				HP :105,
				Atk :125,
				Def :100,
				SpA :60,
				SpD :100,
				Spe :100
			}
		},
		{
			id:"637",
			name:"volcarona",
			actualName:"Volcarona",  
			type:["bug","fire"],
			role:["Set-up Sweeper", "Attacker-Special"],
			stats:{
				HP :85,
				Atk :60,
				Def :65,
				SpA :135,
				SpD :105,
				Spe :100
			}
		},
		{
			id:"303",
			name:"mawile",
			actualName:"Mawile",  
			type:["steel","fairy"],
			role:[""],
			stats:{
				HP :50,
				Atk :85,
				Def :85,
				SpA :55,
				SpD :55,
				Spe :50
			}
		},
		{
			id:"303-m",
			name:"mawile-mega",
			actualName:"Mawile-Mega",  
			type:["steel","fairy"],
			role:["Mega","Set-up Sweeper", "Attacker-Physical"],
			stats:{
				HP :50,
				Atk :105,
				Def :125,
				SpA :55,
				SpD :95,
				Spe :50
			}
		},
		{
			id:"530",
			name:"excadrill",
			actualName:"Excadrill",  
			type:["ground","steel"],
			role:["Attacker-Physical", "Revenge Killer"],
			stats:{
				HP :110,
				Atk :135,
				Def :60,
				SpA :50,
				SpD :65,
				Spe :88
			}
		},
		{
			id:"730",
			name:"primarina",
			actualName:"Primarina",  
			type:["water","fairy"],
			role:["Attacker-Special"],
			stats:{
				HP :80,
				Atk :74,
				Def :74,
				SpA :126,
				SpD :116,
				Spe :60
			}
		},
		{
			id:"479w",
			name:"rotom-wash",
			actualName:"Rotom-Wash",  
			type:["water","electric"],
			role:["Attacker-Special","Pivot","Support"],
			stats:{
				HP :50,
				Atk :65,
				Def :107,
				SpA :105,
				SpD :107,
				Spe :86
			}
		},
		{
			id:"479h",
			name:"rotom-heat",
			actualName:"Rotom-Heat",  
			type:["fire","electric"],
			role:["Attacker-Special","Pivot","Support"],
			stats:{
				HP :50,
				Atk :65,
				Def :107,
				SpA :105,
				SpD :107,
				Spe :86
			}
		},
		{
			id:"003",
			name:"venusaur",
			actualName:"Venusaur",  
			type:["grass","poison"],
			role:[""],
			stats:{
				HP :80,
				Atk :82,
				Def :83,
				SpA :100,
				SpD :100,
				Spe :80
			}
		},
		{
			id:"003-m",
			name:"venusaur-mega",
			actualName:"Venusaur-Mega",  
			type:["grass","poison"],
			role:["Mega","Attacker-Special","Support","Wall-Physical"],
			stats:{
				HP :80,
				Atk :100,
				Def :123,
				SpA :122,
				SpD :120,
				Spe :80
			}
		},
		{
			id:"497",
			name:"serperior",
			actualName:"Serperior",  
			type:["grass","grass"],
			role:["Attacker-Special","Support","Wall-Physical","Set-up Sweeper","Revenge Killer"],
			stats:{
				HP :75,
				Atk :75,
				Def :95,
				SpA :75,
				SpD :95,
				Spe :113
			}
		},
		{
			id:"472",
			name:"gliscor",
			actualName:"Gliscor",  
			type:["ground","flying"],
			role:["Attacker-Physical","Support","Wall-Physical"],
			stats:{
				HP :75,
				Atk :95,
				Def :125,
				SpA :45,
				SpD :75,
				Spe :95
			}
		},
		{
			id:"488",
			name:"cresselia",
			actualName:"Cresselia",  
			type:["psychic","psychic"],
			role:["Wall-Special","Support","Wall-Physical"],
			stats:{
				HP :120,
				Atk :70,
				Def :120,
				SpA :75,
				SpD :130,
				Spe :85
			}
		},
		{
			id:"787",
			name:"tapubulu",
			actualName:"Tapu Bulu",  
			type:["grass","fairy"],
			role:["Attacker-Physical","Support"],
			stats:{
				HP :70,
				Atk :130,
				Def :115,
				SpA :85,
				SpD :95,
				Spe :75
			}
		},
		{
			id:"428",
			name:"lopunny",
			actualName:"Lopunny",  
			type:["normal","normal"],
			role:[""],
			stats:{
				HP :65,
				Atk :76,
				Def :84,
				SpA :54,
				SpD :96,
				Spe :105
			}
		},
		{
			id:"428-m",
			name:"lopunny-mega",
			actualName:"Lopunny-Mega",  
			type:["normal","fighting"],
			role:["Attacker-Physical", "Revenge Killer", "Mega", "Support"],
			stats:{
				HP :65,
				Atk :136,
				Def :94,
				SpA :54,
				SpD :96,
				Spe :135
			}
		},
		{
			id:"748",
			name:"toxapex",
			actualName:"Toxapex",  
			type:["poison","water"],
			role:["Wall-Physical", "Wall-Special", "Support"],
			stats:{
				HP :50,
				Atk :63,
				Def :152,
				SpA :53,
				SpD :142,
				Spe :35
			}
		},
		{
			id:"149",
			name:"dragonite",
			actualName:"Dragonite",  
			type:["dragon","flying"],
			role:["Set-Up Sweeper", "Attacker-Physical", "Revenge Killer"],
			stats:{
				HP :91,
				Atk :134,
				Def :95,
				SpA :100,
				SpD :100,
				Spe :80
			}
		},
		{
			id:"793",
			name:"nihilego",
			actualName:"Nihilego",  
			type:["rock","poison"],
			role:["Attacker-Special", "Revenge Killer"],
			stats:{
				HP :109,
				Atk :53,
				Def :47,
				SpA :127,
				SpD :131,
				Spe :103
			}
		},
		{
			id:"091",
			name:"cloyster",
			actualName:"Cloyster",  
			type:["water","ice"],
			role:["Attacker-Physical", "Revenge Killer", "Set-Up Sweeper"],
			stats:{
				HP :50,
				Atk :95,
				Def :180,
				SpA :85,
				SpD :45,
				Spe :70
			}
		},
		{
			id:"212",
			name:"scizor",
			actualName:"Scizor",  
			type:["bug","steel"],
			role:[""],
			stats:{
				HP :70,
				Atk :130,
				Def :100,
				SpA :55,
				SpD :80,
				Spe :65
			}
		},
		{
			id:"212-m",
			name:"scizor-mega",
			actualName:"Scizor-Mega",  
			type:["bug","steel"],
			role:["Mega","Attacker-Physical","Set-Up Sweeper"],
			stats:{
				HP :70,
				Atk :150,
				Def :140,
				SpA :65,
				SpD :100,
				Spe :75
			}
		},
		{	
			id:"798",
			name:"kartana",
			actualName:"Kartana",
			type:["grass","steel"],
			role:["Attacker-Physical", "Revenge Killer", "Set-Up Sweeper"],
			stats:{
				HP : 59,
				Atk : 181,
				Def : 131,
				SpA : 59,
				SpD : 31,
				Spe : 109
			}	
		},
		{	
			id:"474",
			name:"porygonz",
			actualName:"Porygon-Z",
			type:["normal","normal"],
			role:["Attacker-Special", "Set-Up Sweeper"],
			stats:{
				HP : 85,
				Atk : 80,
				Def : 70,
				SpA : 135,
				SpD : 75,
				Spe : 90
			}	
		},
		{	
			id:"380",
			name:"latias",
			actualName:"Latias",
			type:["dragon","psychic"],
			role:[""],
			stats:{
				HP : 80,
				Atk : 80,
				Def : 90,
				SpA : 110,
				SpD : 130,
				Spe : 110
			}	
		},
		{	
			id:"380-m",
			name:"latias-mega",
			actualName:"Latias-Mega",
			type:["dragon","psychic"],
			role:["Mega", "Attacker-Special", "Set-Up Sweeper", "Support"],
			stats:{
				HP : 80,
				Atk : 100,
				Def : 120,
				SpA : 140,
				SpD : 150,
				Spe : 110
			}	
		},
		{	
			id:"145",
			name:"zapdos",
			actualName:"Zapdos",
			type:["electric","flying"],
			role:["Attacker-Special", "Wall-Mixed", "Pivot", "Support"],
			stats:{
				HP : 90,
				Atk : 90,
				Def : 85,
				SpA : 125,
				SpD : 90,
				Spe : 100
			}	
		},
		{	
			id:"635",
			name:"hydreigon",
			actualName:"Hydreigon",
			type:["dark","dragon"],
			role:["Attacker-Special", "Attacker-Mixed", "Pivot", "Revenge Killer"],
			stats:{
				HP : 92,
				Atk : 105,
				Def : 90,
				SpA : 125,
				SpD : 90,
				Spe : 98
			}	
		},
		{	
			id:"245",
			name:"suicune",
			actualName:"Suicune",
			type:["water","water"],
			role:["Attacker-Special", "Set-Up Sweeper", "Support", "Wall-Physical", "Wall-Mixed"],
			stats:{
				HP : 100,
				Atk : 75,
				Def : 115,
				SpA : 90,
				SpD : 115,
				Spe : 85
			}	
		},
		{	
			id:"260",
			name:"swampert",
			actualName:"Swampert",
			type:["water","ground"],
			role:["Support", "Wall-Physical", "Wall-Mixed"],
			stats:{
				HP : 100,
				Atk : 110,
				Def : 90,
				SpA : 85,
				SpD : 90,
				Spe : 60
			}	
		},
		{	
			id:"260-m",
			name:"swampert-mega",
			actualName:"Swampert-Mega",
			type:["water","ground"],
			role:["Attacker-Physical", "Mega"],
			stats:{
				HP : 100,
				Atk : 150,
				Def : 110,
				SpA : 95,
				SpD : 110,
				Spe : 70
			}	
		},
		{	
			id:"462",
			name:"magnezone",
			actualName:"Magnezone",
			type:["electric","steel"],
			role:["Attacker-Special", "Pivot"],
			stats:{
				HP : 70,
				Atk : 70,
				Def : 115,
				SpA : 130,
				SpD : 90,
				Spe : 60
			}	
		},
		{	
			id:"381",
			name:"latios",
			actualName:"Latios",
			type:["dragon","psychic"],
			role:["Attacker-Special"],
			stats:{
				HP : 80,
				Atk : 90,
				Def : 80,
				SpA : 130,
				SpD : 110,
				Spe : 110
			}	
		},
		{	
			id:"080-m",
			name:"slowbro-mega",
			actualName:"Mega Slowbro",
			type:["water","psychic"],
			role:["Attacker-Special"],
			stats:{
				HP : 95,
				Atk : 75,
				Def : 180,
				SpA : 130,
				SpD : 80,
				Spe : 30
			}	
		},
		{	
			id:"609",
			name:"chandelure",
			actualName:"Chandelure",
			type:["ghost","fire"],
			role:["Attacker-Special"],
			stats:{
				HP : 60,
				Atk : 55,
				Def : 90,
				SpA : 145,
				SpD : 90,
				Spe : 80
			}	
		},
		{	
			id:"113",
			name:"chansey",
			actualName:"Chansey",
			type:["normal","normal"],
			role:["Support","Wall-Physical","Wall-Special","Wall-Mixed"],
			stats:{
				HP : 250,
				Atk : 5,
				Def : 5,
				SpA : 35,
				SpD : 105,
				Spe : 50
			}	
		},
		{	
			id:"279",
			name:"pelipper",
			actualName:"Pelipper",
			type:["water","flying"],
			role:["Support"],
			stats:{
				HP : 60,
				Atk : 50,
				Def : 100,
				SpA : 95,
				SpD : 70,
				Spe : 65
			}	
		}
]