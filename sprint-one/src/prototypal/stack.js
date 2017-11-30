var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = Object.create(stackMethods);

  stack.count = 0;

  return stack;
};

var stackMethods = {
  push: function(value) {
    this[this.count] = value;
    this.count++;
  },
  pop: function() {
    if (this.count > 0) {
      this.count--;
      var popped = this[this.count];
      delete this[this.count];
      return popped;
    }
  },
  size: function() {
    return this.count;
  }
};
