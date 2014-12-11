var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;
  var nextFifo = 1;
  var totaldequeue = 0;
  // Implement the methods below

  someInstance.enqueue = function(value){
    counter++;
    storage[counter] = value;
  };

  someInstance.dequeue = function(){
    if (counter > 0) { 
      totaldequeue++;
      var item = storage[nextFifo];
      nextFifo++;
      return item;
    }
    
  };

  someInstance.size = function(){
    var size = (counter - totaldequeue);
    if (size<0) {
      return 0
    }
    return size
  };

  return someInstance;
};

// 1: "a"