module.exports = function(max, funcs) {
  return new Promise(function(resolve){
    var current = 0;
    var counter = 0;
    var results = [];
    next();

    function next() {
      if (funcs.length) {
        if (current < 5) {
          current++;
          var myCounter = counter++;
          funcs.shift()().then(function(result){
            current--;
            results[myCounter] = result;
            next();
          });
          next();
        }
      } else {
        if (current === 0) {
          resolve(results);
        }
      }
    }
  });
}
