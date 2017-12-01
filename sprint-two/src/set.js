var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this.contains(item)) {
    this._storage.push(item);
  }
};

setPrototype.contains = function(item) {
  for (let i = 0; i < this._storage.length; i++) {
    if (this._storage[i] === item) {
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(item) {
  this._storage.splice(item);
};

/*
 * Complexity: What is the time complexity of the above functions?
 *
 * add: O(n) because we use the setPrototype.contains function
 * contains: O(n) because we iterate over this._storage to find item
 * remove: O(n) because splice is a built in Array math method
 */
