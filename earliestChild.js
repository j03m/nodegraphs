var ArticulationFinder = require('./articulationFinder.js').ArticulationFinder;
var config = {
    "directed":true,
    "edgeData":[
        {from:0, to:1},
        {from:1, to:2},
        {from:2, to:0},
        {from:2, to:3},
        {from:3, to:4},
        {from:4, to:5},
        {from:0, to:3},
        {from:0, to:6},
        {from:6, to:7},
        {from:7, to:0},
        {from:7, to:8},
        {from:8, to:9},
        {from:8, to:10},
        {from:9, to:10}
    ]
}

var al = new ArticulationFinder(config);
al.dfs(0);
al.dumpEarliestChild();

