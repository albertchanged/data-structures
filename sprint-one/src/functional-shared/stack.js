var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = {};

  stack.push = stackMethods.push;
  stack.pop = stackMethods.pop;
  stack.size = stackMethods.size;
  stack.count = 0;
  return stack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this[this.count] = value;
  this.count++;
};

stackMethods.pop = function() {
  if (this.count > 0) {
    this.count--;
    var popped = this[this.count];
    delete this[this.count];
    return popped;
  }
  // save top element
  // delete it
  // return saved top element

};

stackMethods.size = function() {
  return this.count;
};