var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = new Node(value);
    if (!list.head) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };   

  list.removeHead = function() {
    if (list.head) {
      var removed = list.head.value;
      list.head = list.head.next;
      return removed;
    }
  };

  list.contains = function(target) {
    var current = list.head;
    while (current) {
      if (current.value === target) { return true; }
      current = current.next;
    }    
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addToTail: O(1) because we simply move pointers
 * removeHead: O(1) because we simply move pointers
 * contains: O(n) because we iterate over all nodes to find target
 */
