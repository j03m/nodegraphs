
var ConnectedAdjacencyList = require('./connectedAdjacencyList.js').ConnectedAdjacencyList;


var configComplex = {
    "directed":false,
    "edgeData":[
        {from:0, to:2},
        {from:2, to:1},
        {from:1, to:4},
        {from:0, to:5},
        {from:2, to:5},
        {from:5, to:0},
        {from:2, to:3},
        {from:3, to:5},
        {from:5, to:4},
        {from:4, to:3},
    ]
}

var configDisconnected = {
    "directed":false,
    "edgeData":[
        {from:0, to:1},
        {from:1, to:2},
        {from:3, to:4},
        {from:4, to:5},
        {from:6, to:7},
        {from:7, to:8},
        {from:8, to:9}
    ]
}

var configBipartite = {
    "directed":true,
    "edgeData":[ //nodes 0-5 are weapons, nodes 6-10 are ammo
        {from:0, to:6},
        {from:0, to:7},
        {from:1, to:7},
        {from:2, to:8},
        {from:3, to:9},
        {from:4, to:9},
        {from:5, to:8}
    ]
}

var al = new ConnectedAdjacencyList(configBipartite);
al.bfs(0);
al.findConnectedComponents();
console.log ("Am I bipartite? Answer: " + al.isBipartite());
