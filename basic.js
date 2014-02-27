var AdjencyList = require('./adjencylist.js').AdjencyList;

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

var configDirected = {
    "directed":true,   //note this should be directed, because our raw data will repeat relationships
    "edgeData":[]
}

for(var i =0;i<10;i++){
    for (var ii=0;ii<10;ii++){
        if (i != ii){
            configDirected.edgeData.push({"from":i, "to":ii});
        }
    }
}

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


var al = new AdjencyList(configComplex);
al.bfs(0);
al.dumpParents();
al.findPath(0,4);
var stack = al.getPath(0,4);
//pop the nodes off the stack
while(stack.length>0){
    var node = stack.pop();
    console.log("stack node: " + node);
}