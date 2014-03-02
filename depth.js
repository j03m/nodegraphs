var AdjacencyList = require('./adjacencyList.js').AdjacencyList;

var config = {
    "directed":true,
    "edgeData":[
        {"from":0, "to":1},
        {"from":0, "to":2},
        {"from":1, "to":2},
        {"from":2, "to":0},
        {"from":2, "to":3},
        {"from":3, "to":3},
    ]
}

var al = new AdjacencyList(config);
al.initTraversal();
al.dfs(2);