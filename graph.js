var AdjencyList = function(config){
    this.edgeData = config.edgeData;
    this.directed = config.directed;
    this.init();
}

AdjencyList.prototype.init = function(){
    this.edges = [];
    this.degree = [];
    this.numEdges = 0;
    this.numVertices = 0;
    this.initEdges();
}

AdjencyList.prototype.initEdges = function(){
    if (this.edgeData){
        this.createFromEdgeData();
    }else{
        this.createRandomEdges();
    }
}

AdjencyList.prototype.createFromEdgeData = function(){
    for (var i =0;i<this.edgeData.length; i++){
        var edge = this.edgeData[i];
        this.insertEdge(edge.from, edge.to, this.directed);
    }
}

AdjencyList.prototype.insertEdge = function (from, to, directed){
    if (parseInt(from)==NaN || from > this.edgeData.length){
        throw "invalid edge from: " + from;
    }

    if (parseInt(to)==NaN || to > this.edgeData.length){
        throw "invalid edge to: " + to;
    }


    this.numEdges++;
    this.numVertices++;

    //build the adjency list by inserting at head
    var edgeNode = {};               //0,1 comes in 0->1
    //the next node in my adjency list points TO
    edgeNode.number = to; //this node goes from 1

    var head = this.edges[from];
    edgeNode.next = head;

    //insert at head
    this.edges[from] = edgeNode;

    if (!directed){
        //flip the parameters around - to is now from, from is now to, indicate that directed is true temp to avoid infinite recurse
        this.insertEdge(to, from, true);
    }

}

AdjencyList.prototype.createRandomEdges = function(){
    throw "not implemented."
}

AdjencyList.prototype.bfs = function(start){
    //init tracking
    this.initBfs();
    this.queue.push(start);
    this.discovered[start]=true;
    while (this.queue.length > 0){
        //pull a node from the queue
        var node = this.queue.shift();
        //process it
        this.processVertexEarly(node);
        //mark it as processed
        this.processed[node] = true;

        //get the adjacency list for this node (which equates to getting the first child/head
        var list = this.edges[node];
        while(list){
            //get the number of this child
            var childNode = list.number;
            //if it wasn't processed
            if (!this.processed[childNode]){
                this.processEdge(node, childNode);
            }

            //if it hasn't been discovered
            if (!this.discovered[childNode]){
                //queue it up
                this.queue.push(childNode);
                //set it as discovered
                this.discovered[childNode] = true;

                //indicate that the parent of the childnode is node
                this.parent[childNode] = node;
            }

            list = list.next; //traverse the list
        }

    }
}

AdjencyList.prototype.processVertexEarly = function(v){
    console.log("processed vertex:" +v );
}



AdjencyList.prototype.processEdge = function(from, to){
    console.log("processed edge:" +from + "->" + to );
}


AdjencyList.prototype.initBfs = function(){
    this.processed = [];
    this.discovered = [];
    this.parent = [];
    this.queue = [];
}

module.exports.AdjencyList = AdjencyList;







