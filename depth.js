var AdjacencyList = require('./adjacencyList.js').AdjacencyList;

var config = {
    "directed":false,
    "edgeData":[
        {"from":0, "to":1},
        {"from":1, "to":2},
        {"from":2, "to":4},
        {"from":0, "to":3},
        {"from":3, "to":4},
        {"from":4, "to":5},
        {"from":3, "to":6}


    ]
}

var al = new AdjacencyList(config);
al.bfs(0);