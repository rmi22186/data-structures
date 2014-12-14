var Graph = function(){
	this.value = null;
	this.storage = [];
};

Graph.prototype.addNode = function(node){
	this.value = node;
	this.storage.push(node);
};

Graph.prototype.contains = function(node){
	return this.storage.indexOf(node) >= 0;
};

Graph.prototype.removeNode = function(node){
	var removalIndex = this.storage.indexOf(node);
	this.storage.splice(removalIndex,1);
};

Graph.prototype.hasEdge = function(fromNode, toNode){
};

Graph.prototype.addEdge = function(fromNode, toNode){
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

Graph.prototype.forEachNode = function(cb){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */