var StronglyConnectedFinder = require('./stronglyConnectedFinder.js').StronglyConnectedFinder;
var config = {
    "directed":true,
    "edgeData":[
        {from:1, to:0},
        {from:0, to:2},
        {from:2, to:1},
        {from:0, to:3},
        {from:3, to:4}
    ]
}

var al = new StronglyConnectedFinder(config);
al.findStronglyConnectedComponents();


