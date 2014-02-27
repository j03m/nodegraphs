
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

var al = new ConnectedAdjacencyList(configComplex);
al.bfs(0);
al.findConnectedComponents();
