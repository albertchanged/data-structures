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
    return this.left.contains(target);
  } else if (this.value < target && this.right) {
    return this.right.contains(target);
  }
  return isFound;
};

BinarySearchTree.prototype.depthFirstLog = function(callback) {
  if (this) { callback(this.value); }
  if (this.left) { this.left.depthFirstLog(callback); }
  if (this.right) { this.right.depthFirstLog(callback); }
};


/*
 * Complexity: What is the time complexity of the above functions?
 * 
 * insert: O(log n) because the program searches one side at a time
 * contains: O(log n) because the program searches one side at a time
 * depthFirstLog: O(n) because it iterates over all nodes
 */
