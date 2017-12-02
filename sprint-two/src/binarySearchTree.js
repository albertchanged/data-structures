var BinarySearchTree = function(value) {
  var tree = Object.create(BinarySearchTree.prototype);

  tree.value = value;
  tree.right = undefined;
  tree.left = undefined;

  return tree;
};

BinarySearchTree.prototype.insert = function(value) {
  var currentNode = BinarySearchTree(value);  
  
  if (this.value > value && this.left === undefined) { 
    this.left = currentNode;
  } else if (this.value > value) {
    this.left.insert(value);
  } else if (this.value < value && this.right === undefined) {
    this.right = currentNode;
  } else if (this.value < value) {
    this.right.insert(value);
  }
};

BinarySearchTree.prototype.contains = function(target) {  
  var isFound = false;

  if (this.value === target) {
    isFound = true;
  } else if (this.value > target && this.left) {
    // recursion left side
    return this.left.contains(target);
  } else if (this.value < target && this.right) {
    // recursion right side
    return this.right.contains(target);
  }
  return isFound;
};

BinarySearchTree.prototype.depthFirstLog = function(callback) {
  for (var key in this) {
    callback(this.value);
  } 
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
