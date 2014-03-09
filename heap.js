//HEADS UP: modified version of a generic heap used specifically for shortestPathFinder.js and runDijkstra. It specifically looks for a .vertex value on nodes.
//generic heap here: https://github.com/j03m/trickyQuestions/blob/master/heapStuff.js
var Heap = function(scoreFunction){
    this.content = [];
    this.positions = {};
    this.scoreFunction = scoreFunction;
}

Heap.prototype = {
    push:function(element){
        this.content.push(element);
        this.positions[element.vertex]=this.content.length-1;
        this.bubbleUp(this.content.length -1);
    },
    getVertex:function(vertexNumber){
        var pos = this.getVertexPosition(vertexNumber);
        if (pos == undefined){ //not in the heap
            return undefined;
        }else{
            return this.content[pos];
        }
    },
    getVertexPosition:function(vertexNumber){
        return this.positions[vertexNumber];
    },
    bubbleUp:function(n){
        var element = this.content[n];
        var score = this.scoreFunction(element);
        var updateCalled = false;
        while(n>0){
            var parentN = Math.floor(n/2);
            var parent = this.content[parentN];
            if (score >= this.scoreFunction(parent))
                break;
            this.content[parentN] = element;
            this.positions[element.vertex]=parentN;
            this.content[n] = parent;
            this.positions[parent.vertex]=n;
            updateCalled = true;
            n = parentN;
        }

    },
    pop:function(){
        var top = this.content[0];
        var end = this.content.pop();
        if (this.content.length > 0){
            this.content[0] = end;
            this.positions[end.vertex]=0;
            this.sinkDown(0);
        }
        if (top != undefined){
            delete this.positions[top.vertex];
        }
        return top;
    },
    sinkDown:function(n){
        var length = this.content.length;
        var element = this.content[n];
        var elemScore = this.scoreFunction(element);
        var swap;
        while(true){
            var child1Pos=n*2;
            var child2Pos = (n*2)+1;
            if (child1Pos < length){
                var child1 = this.content[child1Pos];
                var child1Score = this.scoreFunction(child1);
                if (child1Score < elemScore)   {
                    swap = child1Pos
                }

            }
            if (child2Pos < length) {
                var child2 = this.content[child2Pos];
                var child2Score = this.scoreFunction(child2);
                if (child2Score < (swap == null ? elemScore : child1Score)){
                    swap = child2Pos;
                }

            }

            if (swap == null) {
                break;
            }
            this.content[n] = this.content[swap];
            this.positions[this.content[swap].vertex]=n;
            this.content[swap] = element;
            this.positions[element.vertex]=swap;
            n = swap;

            swap = null;

        }


    }

}


module.exports.Heap = Heap;