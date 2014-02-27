
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

var al = new ConnectedAdjacencyList(configDisconnected);
al.bfs(0);
al.findConnectedComponents();
