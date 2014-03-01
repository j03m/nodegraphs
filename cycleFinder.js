var util = require('util');
var AdjacencyList = require('./adjacencyList.js').AdjacencyList;

//inherit from AdjacencyList
function CycleFinder() {
    AdjacencyList.apply(this,arguments);
    this.cycleDetected = false;
}

util.inherits(CycleFinder, AdjacencyList);


CycleFinder.prototype.hasCycle = function(){
    this.dfs(0);
    return this.cycleDetected;
}

CycleFinder.prototype.processEdge = function(from, to){
    //detect a back edge
    if (this.discovered[to] && this.processed[to]){
        console.log("Found a cycle from: " + from + " to: " + to);
        this.cycleDetected = true;
    }
}

module.exports.CycleFinder = CycleFinder;