var util = require('util');
var AdjacencyList = require('./adjacencyList.js').AdjacencyList;

//inherit from AdjacencyList
function ArticulationFinder() {
    AdjacencyList.apply(this,arguments);
    this.cycleDetected = false;
}

util.inherits(ArticulationFinder, AdjacencyList);


ArticulationFinder.prototype.hasCycle = function(){
    this.dfs(0);
    return this.cycleDetected;
}

ArticulationFinder.prototype.processVertexLate = function(node){
    if (this.childCount[node] > 1 && this.parent[node] == undefined){
        console.log(node + " is a root articulation vertex.");
    }

    var earliestChildAge = this.vertexAge[this.earliestChild[node]];
    var myAge = this.vertexAge[node];
    if (this.parent[node] != undefined && earliestChildAge > myAge){
        console.log(node + " is a normal articulation vertex.");
    }

}

module.exports.ArticulationFinder = ArticulationFinder;