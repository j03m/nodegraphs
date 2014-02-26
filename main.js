var AdjencyList = require('./graph.js').AdjencyList;

var config = {
    "directed":false,
//    "edgeData":[
//        {"from":0, "to":1},
//        {"from":1, "to":2},
//        {"from":2, "to":3},
//        {"from":3, "to":4},
//        {"from":4, "to":5},
//        {"from":5, "to":6},
//        {"from":6, "to":7},
//        {"from":7, "to":8},
//        {"from":8, "to":9}
//    ]
      "edgeData":[]
}

for(var i =0;i<10;i++){
    for (var ii=0;ii<10;ii++){
        if (i != ii){
            config.edgeData.push({"from":i, "to":ii});
        }
    }
}


var al = new AdjencyList(config);
al.bfs(0);
