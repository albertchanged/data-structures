var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;  
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[count] = value;
    count++;
  };

  someInstance.dequeue = function() {
    if (count > 0) {
      var dequeued = storage[0];
      delete storage[0];
  
      for (var i = 1; i <= count; i++) {
        var temp = storage[i];
        storage[i - 1] = temp;
      }
      count--;
      return dequeued;
    }
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
