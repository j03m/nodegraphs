var util = require('util');
var AdjacencyList = require('./adjacencyList.js').AdjacencyList;
var Heap = require('./heap.js').Heap;
//inherit from AdjacencyList
function ShortestPathBuilder() {
    AdjacencyList.apply(this,arguments);
    this.heap = new Heap(this.scoring.bind(this));
    this.distances = [];
    this.heapPositions = [];
}

util.inherits(ShortestPathBuilder, AdjacencyList);

//dijkstra's algo
ShortestPathBuilder.prototype.buildShortestPathTree = function(node){
    //populate the heap with the start node with distance 0
    this.heap.push({
        vertex:node,
        distance:0
    });

    //initialize teh rest of the heap with infinity
    for(var i =0;i<this.edges.length;i++){
        if (i!=node){
            this.heap.push({
                vertex:i,
                distance:Number.MAX_VALUE
            });
        }
        this.distances.push(Number.MAX_VALUE);
    }

    //set node to 0
    this.distances[node] = 0;

    var currentNode = this.heap.pop();
    while(currentNode){
        var vertex = currentNode.vertex;
        var list = this.edges[vertex];
        var pathDistance = 0;
        while(list){
            //neighbors of vertex need to have their distances accumulated
            if (list.number != node){
                var neighbor = this.heap.getVertex(list.number);
                if (neighbor && //if I'm in the heap
                    this.distances[currentNode.vertex]!= Number.MAX_VALUE &&    //and the main vertex is not still infinity
                    this.distances[currentNode.vertex]+list.weight < this.distances[list.number] //And the new path value (weight+current) is less then whatever we have for our current path
                    ){
                        var newDistance = this.distances[currentNode.vertex]+list.weight;
                        this.distances[list.number] = newDistance;
                        neighbor.distance = newDistance;
                        this.heap.bubbleUp(this.heap.getVertexPosition(list.number));

                }
            }
            list = list.next;  //keep going through my neighbors
        }
        currentNode = this.heap.pop(); //get the next lowest path (greedy)
    }

    for(var i=0;i<this.distances.length;i++){
        console.log(node + " to " + i + " is " + this.distances[i]);
    }
}

ShortestPathBuilder.prototype.scoring = function(node){
    if (!node){
        console.log("")
    }
    return node.distance;
}

ShortestPathBuilder.prototype.update = function(position, element){
    this.heapPositions[element.vertex] = position;
}

module.exports.ShortestPathBuilder = ShortestPathBuilder;


