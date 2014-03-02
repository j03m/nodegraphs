var util = require('util');
var AdjacencyList = require('./adjacencyList.js').AdjacencyList;

//inherit from AdjacencyList
function TopologicalSorter() {
    AdjacencyList.apply(this,arguments);
    this.cycleDetected = false;
}

util.inherits(TopologicalSorter, AdjacencyList);


TopologicalSorter.prototype.topologicalSort = function(){
    this.initTraversal();
    this.tsStack = [];
    for(var i =0;i<this.numVertices; i++){
        if (!this.discovered[i]){
            this.dfs(i);
        }
    }

    var element = this.tsStack.pop();
    while(element!=undefined){
        console.log("ts sort:" + element);
        element = this.tsStack.pop();
    }
}

TopologicalSorter.prototype.processVertexLate = function(v){

        this.tsStack.push(v);

}

TopologicalSorter.prototype.processEdge = function(from, to){
    var edgeClass = this.classifyEdge(from, to);
    if (edgeClass == AdjacencyList.edgeClass.back){
        console.log("Back edge found, not valid DAG for Topological Sort");
    }

}


module.exports.TopologicalSorter = TopologicalSorter;