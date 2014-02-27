var AdjacencyList = require('./adjacencyList.js');

//inherit from AdjacencyList
var ConnectedAdjacencyList = function(){
    AdjacencyList.apply(this,arguments);
}
ConnectedAdjacencyList.prototype=Object.create(AdjacencyList.prototype);

ConnectedAdjacencyList.prototype.findConnectedComponents = function(){
    this.initBfs();


}

