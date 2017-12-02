

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

// index is hash code
HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (!this._storage.get(index)) {
    this._storage.set(index, []);
  }
  this._storage.get(index).push([k, v]);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  var result = undefined;
  var innerArray = this._storage.get(index);

  if (innerArray) {
    for (let i = 0; i < innerArray.length; i++) {
      if (innerArray[i][0] === k) {
        result = innerArray[i][1];
      }
    }    
  }
  return result;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.set(index, undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


