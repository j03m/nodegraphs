var ShortestPathBuilder = require('./shortestPathBuilder.js').ShortestPathBuilder;
var config = {
    "directed":false,
    "edgeData":[
        {from:0, to:1, weight:4},
        {from:0, to:7, weight:8},
        {from:1, to:2, weight:8},
        {from:1, to:7, weight:11},
        {from:2, to:8, weight:2},
        {from:2, to:5, weight:4},
        {from:2, to:3, weight:7},
        {from:7, to:8, weight:7},
        {from:7, to:6, weight:1},
        {from:8, to:6, weight:6},
        {from:6, to:5, weight:2},
        {from:5, to:3, weight:14},
        {from:5, to:4, weight:10},
        {from:3, to:4, weight:9}
    ]
}

var al = new ShortestPathBuilder(config);
al.buildShortestPathTree(0);


