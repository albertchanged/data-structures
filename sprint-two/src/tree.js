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
  }

  // var searchChildren = function(root) {
  console.log('first' + this.children);
  if (Object.keys(this) === target) {
    console.log('second hello'); 
    return true;
  }

  if (this.children) {
    for (let i = 0; i < this.children.length; i++) {
      console.log(this.children[i]);
      return this.children[i].contains(target);
    }
  }

  return false;
  // };
  
  return searchChildren(this);
  // return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
