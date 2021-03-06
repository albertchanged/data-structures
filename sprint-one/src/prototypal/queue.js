var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = Object.create(queueMethods);

  queue.count = 0;
  return queue;
};

var queueMethods = {
  enqueue: function(value) {
    this[this.count] = value;
    this.count++;
  },
  dequeue: function() {
    if (this.count > 0) {
      var dequeued = this[0];
      delete this[0];
      
      for (var i = 1; i <= this.count; i++) {
        var temp = this[i];
        this[i - 1] = temp;  
      }
      this.count--;
      return dequeued;
    }
  },
  size: function() {
    return this.count;
  }
};


