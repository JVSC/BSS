function selectorsFunc (){
	var WatchOut = document.getElementById("WO");
	var TypeMU = document.getElementById("TM");
	var Overall = document.getElementById("OS");
	var GoodMatch = document.getElementById("GT");

	GoodMatch.addEventListener("click",function(){
		
		var teamWindow = document.getElementById("t-members")
		var typingWindow = document.getElementById("typing")
		var threatWindow = document.getElementById("threat-container")
		var statsWindow = document.getElementById("overall-power");
		var matchWindow = document.getElementById("SuggestedTeamMates")

		threatWindow.classList.add("hiddenB")
		typingWindow.classList.add("hiddenB")
		statsWindow.classList.add("hiddenB")
		matchWindow.classList.remove("hiddenB")

		teamWindow.classList.remove("TypeMatch","OverallStats","WatchOut")
		teamWindow.classList.add("GoodTeamMates")
	})

	WatchOut.addEventListener("click",function(){
		
		var teamWindow = document.getElementById("t-members")
		var typingWindow = document.getElementById("typing")
		var threatWindow = document.getElementById("threat-container")
		var statsWindow = document.getElementById("overall-power");
		var matchWindow = document.getElementById("SuggestedTeamMates")

		threatWindow.classList.remove("hiddenB")
		typingWindow.classList.add("hiddenB")
		statsWindow.classList.add("hiddenB")
		matchWindow.classList.add("hiddenB")

		teamWindow.classList.remove("TypeMatch","OverallStats","GoodTeamMates")
		teamWindow.classList.add("WatchOut")
	})

	TypeMU.addEventListener("click",function(){
		
		var teamWindow = document.getElementById("t-members")
		var typingWindow = document.getElementById("typing")
		var threatWindow = document.getElementById("threat-container")
		var statsWindow = document.getElementById("overall-power");
		var matchWindow = document.getElementById("SuggestedTeamMates")

		threatWindow.classList.add("hiddenB")
		statsWindow.classList.add("hiddenB");
		typingWindow.classList.remove("hiddenB")
		matchWindow.classList.add("hiddenB")

		teamWindow.classList.remove("WatchOut","OverallStats","GoodTeamMates")
		teamWindow.classList.add("TypeMatch")
	})

	Overall.addEventListener("click",function(){
		
		var teamWindow = document.getElementById("t-members")
		var typingWindow = document.getElementById("typing")
		var threatWindow = document.getElementById("threat-container")
		var statsWindow = document.getElementById("overall-power");
		var matchWindow = document.getElementById("SuggestedTeamMates")

		threatWindow.classList.add("hiddenB")
		statsWindow.classList.remove("hiddenB");
		typingWindow.classList.add("hiddenB")
		matchWindow.classList.add("hiddenB")

		teamWindow.classList.remove("WatchOut","TypeMatch","GoodTeamMates")
		teamWindow.classList.add("OverallStats")
	})	
}

selectorsFunc();