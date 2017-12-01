var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  // your code here
  newTree.children = [];
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newNode = new Tree(value);

  if (Object.keys(this)) {
    this[value] = newNode;
  }
  this.children.push(newNode);
};

treeMethods.contains = function(target) {
  if (target in this) { 
    return true;
  } else {
    if (this.children) {
      for (let i = 0; i < this.children.length; i++) {
        if (this.children[i].contains(target)) {
          return true;
        }
      }
    }
    return false;
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 * 
 * addChild: O(1) because we push to the end of the array
 * contains: at least O(n^2) because of nested iterations -- recursion within for loop
 */
