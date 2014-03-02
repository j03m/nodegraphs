var util = require('util');
var AdjacencyList = require('./adjacencyList.js').AdjacencyList;

console.log = function(){}


//inherit from AdjacencyList
function StronglyConnectedFinder() {
    AdjacencyList.apply(this,arguments);
    this.noCapture = false;
}

util.inherits(StronglyConnectedFinder, AdjacencyList);



StronglyConnectedFinder.prototype.findStronglyConnectedComponents = function(){
    this.initTraversal();
    this.tsStack = [];
    for(var i =0;i<this.numVertices; i++){
        if (!this.discovered[i]){
            this.dfs(i);
        }
    }

    this.transpose();
    this.initTraversal(); //reset traversal
    var node = this.tsStack.pop();
    this.noCapture = true;

    while(node!=undefined){
        node = this.tsStack.pop();
        if (!this.discovered[node]){
            this.dfs(node);
            process.stdout.write("\n");
        }
    }
}

StronglyConnectedFinder.prototype.transpose = function(){
    //invert edgedata, then reinit
    for(var i=0;i<this.edgeData.length;i++){
        var to = this.edgeData[i].to;
        this.edgeData[i].to = this.edgeData[i].from;
        this.edgeData[i].from = to;
    }
    this.init();
}


StronglyConnectedFinder.prototype.processVertexEarly = function(v){
   if (this.noCapture) {
       process.stdout.write(v + " ");
   }
}


StronglyConnectedFinder.prototype.processEdge = function(from, to){
    if (!this.noCapture){
        this.tsStack.push(to);
    }
}

module.exports.StronglyConnectedFinder = StronglyConnectedFinder;