var AdjencyList = require('./graph.js').AdjencyList;

var config = {
    "directed":false,
    "edgeData":[
        {"from":0, "to":1},
        {"from":1, "to":2},
        {"from":2, "to":3},
        {"from":3, "to":4},
        {"from":4, "to":5},
        {"from":5, "to":6},
        {"from":6, "to":7},
        {"from":7, "to":8},
        {"from":8, "to":9}
    ]
}

var al = new AdjencyList(config);
al.bfs(0);
