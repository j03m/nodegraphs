var CycleFinder = require('./cycleFinder.js').CycleFinder;
var config = {
    "directed":true,
    "edgeData":[
        {from:0, to:1},
        {from:1, to:2},
        {from:2, to:0},
        {from:2, to:3},
        {from:3, to:3}

    ]
}

var al = new CycleFinder(config);
console.log("Does this have a cycle in it? "  + al.hasCycle());

