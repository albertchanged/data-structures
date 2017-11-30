var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    if (!storage.hasOwnProperty(value)) {
      storage[count] = value;
      count++;
    }
  };
 //{ 1 : 'a', 2 : 'b'}  count = 2 props
  someInstance.pop = function() {
    if (count > 0) {
      count--; // storage[1] = a
      var popped = storage[count]; // 2 : 'b'
      delete storage[count]; // { 1 : 'a'}
      return popped;
    }
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
