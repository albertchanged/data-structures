var Set = function() {
  var set = Object.create(setPrototype);
  // set._storage = []; // fix me
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  // if (!this.contains(item)) {
  //   this._storage.push(item);
  // }
  if (!this.contains(item) && this._storage[item] !== item) {
    this._storage[item] = item;
  }
};

setPrototype.contains = function(item) {
  // for (let i = 0; i < this._storage.length; i++) {
  //   if (this._storage[i] === item) {
  //     return true;
  //   }
  // }
  // return false;
  if (this._storage[item]) { return true; }
  return false;
};

setPrototype.remove = function(item) {
  // this._storage.splice(item);
  // if (this._storage.item) {
  //   delete item;
  // }
  delete this._storage[item];
};
/*
 * Complexity: What is the time complexity of the above functions?
 *
 * ORIGINAL IMPLEMENTATION (ARRAY)
 * add: O(n) because we use the setPrototype.contains function
 * contains: O(n) because we iterate over this._storage to find item
 * remove: O(n) because splice is a built in Array math method
 *
 * SECOND IMPLEMENTATION (OBJECT)
 * add: O(1) because we add item using it as a key
 * contains: O(1) because we access item using its key
 * remove: O(1) because we delete item using its key
 */

