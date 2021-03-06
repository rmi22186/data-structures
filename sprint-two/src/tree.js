var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;
  _.extend(newTree, treeMethods);
  // your code here
  newTree.children = [];  // fix me
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var tree = Tree(value);
  tree.parent = this;
  this.children.push(tree);
  console.log(this);
};

treeMethods.contains = function(target){
  // check if 'this' value is === target
  if (this.value === target) {
    return true;
  // else recurse through each child of 'this' node
  } else {
    for (var i = 0; i < this.children.length; i++) {
      // for each child, capture result of recursive call to var result
      var result = this.children[i].contains(target);
      //if result === true (one of child's descendents contains target)
      if (result) {
        // bubble up found true
        return true;
      }
    }
  }
  // if, no descendents contain target, bubble up "not found"
  return false;
};

treeMethods.removeFromParent = function() {
  // when we call removeFromParent on "this" we want to delete "this" from its parents children array,
  //
  // it will naturally remove all children nodes found in this.children
    // if possible, delete node and all children nodes if needed
  this.parent.children.splice(this.parent.children.indexOf(this),1);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
