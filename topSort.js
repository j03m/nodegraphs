var TopologicalSorter = require('./topologicalSorter.js').TopologicalSorter;
var config = {
    "directed":true,
    "edgeData":[
        {from:5, to:2},
        {from:5, to:0},
        {from:4, to:0},
        {from:4, to:1},
        {from:2, to:3},
        {from:3, to:1}

    ]
}

var al = new TopologicalSorter(config);
al.topologicalSort();


