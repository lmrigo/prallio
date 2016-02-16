/*
var humanResources = ["Walter", "Bruce", "John", "Jack"];
var humanResourcesCostPerHour = [40.0, 35.0, 12.0, 40.0];
var humanResourcesHours = [0, 0, 0, 0];
var humanResourcesTotalCost = [0, 0, 0, 0];
var humanResourcesFixed = [false, false, true, true];
var projectName = "Prallio";
var projectBudget = 1900;
*/
humanResources = [];
humanResourcesCostPerHour = [];
humanResourcesHours = [];
humanResourcesTotalCost = [];
humanResourcesFixed = [];
projectName = "";
projectBudget = 0;


var onBudgetSet = function() {
	var totalCost = projectBudget;
	var availableResources = 0;
	for (var i = 0; i < humanResources.length; i++) {
		if (!humanResourcesFixed[i]) {
			totalCost -= humanResourcesTotalCost[i];
		} else {
			availableResources++;
		}
	}
	var eachCost = totalCost / availableResources;
	for (var i = 0; i < humanResources.length; i++) {
		if (!humanResourcesFixed[i]) {
			humanResourcesTotalCost[i] = eachCost;
		}
	}
};

var onHumanResourceHourSet = function(indexOfHumanResource) {
	var i = indexOfHumanResource;
	if (humanResourcesHours[i] == 0) { // check if the field was cleared
		humanResourcesFixed[i] = false;
	} else {
		humanResourcesTotalCost[i] = humanResourcesHours[i] * humanResourcesCostPerHour[i];
		humanResourcesFixed[i] = true;
		if (projectBudget > 0) { // if project has budget, recalculate
			onBudgetSet();
		}
	}
};

var onHumanResourceTotalCostSet = function(indexOfHumanResource) {
	var i = indexOfHumanResource;
	if (humanResourcesTotalCost[i] == 0) { // check if the field was cleared
		humanResourcesFixed[i] = false;
	} else {
		humanResourcesHours[i] = humanResourcesTotalCost[i] / humanResourcesCostPerHour[i];
		humanResourcesFixed[i] = true;
		if (projectBudget > 0) { // if project has budget, recalculate
			onBudgetSet();
		}
	}
};
