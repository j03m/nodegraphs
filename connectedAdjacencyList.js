var util = require('util');
var AdjacencyList = require('./adjacencyList.js').AdjacencyList;

//inherit from AdjacencyList
function ConnectedAdjacencyList() {
    AdjacencyList.apply(this,arguments);
    this.connectionCohorts = [];
}

util.inherits(ConnectedAdjacencyList, AdjacencyList);

ConnectedAdjacencyList.prototype.findConnectedComponents = function(){

    //init the stuff we need for a b
    this.initBfs();
    var cohort = 0;

    //iterate through all of the vertices
    for (var i=0; i<this.numVertices;i++){
        //if it's not found
        if (!this.discovered[i]){
            cohort = cohort+1;
            console.log("***Cohort: " + cohort);
            this.bfs(i); //todo: if we are missing a vertices number for example 1,2,4,5 - what happens here?
            console.log("******")
        }
    }

}
module.exports.ConnectedAdjacencyList = ConnectedAdjacencyList;

