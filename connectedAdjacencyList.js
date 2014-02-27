var util = require('util');
var AdjacencyList = require('./adjacencyList.js').AdjacencyList;

//inherit from AdjacencyList
function ConnectedAdjacencyList() {
    AdjacencyList.apply(this,arguments);
    //used to store a color for a given node for a bipartite check
    this.colors = [];

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
            //make a conhort
            cohort = cohort+1;
            console.log("***Cohort: " + cohort);
            this.bfs(i); //todo: if we are missing a vertices number for example 1,2,4,5 - what happens here?
            console.log("******")
        }
    }

}


ConnectedAdjacencyList.prototype.isBipartite = function(){
    this.initBfs();
    this.colors = [];
    for(var i=0;i<this.numVertices;i++){
        this.colors.push(0);
    }

    this.bipartite = true;
    //iterate through the number of vertices
    for(var i=0;i<this.numVertices;i++){
        //have we already determined that we are not in fact bipartite?
        if (!this.bipartite){
            break;
        }
        //has the vertex been discovered?
        if (!this.discovered[i]){
            //if not set it to white (1)
            this.colors[i] = 1;
            this.bfs(i);
        }
    }
    return this.bipartite;
}

//override of AdjacencyList processEdge method
ConnectedAdjacencyList.prototype.processEdge = function(from, to){
    if (this.colors[from] == this.colors[to]){
        this.bipartite=false;
        console.log("From:" + from + " to:" + to + " are the same color");
    }
    this.colors[to] = this.complement(this.colors[from]);
}

ConnectedAdjacencyList.prototype.complement = function(value){
    if (value == 0 || value == undefined){
        return 1;
    }else if (value == 1){
        return 0;
    }else{
        throw "Unexpected value: " + value;
    }
}

module.exports.ConnectedAdjacencyList = ConnectedAdjacencyList;

