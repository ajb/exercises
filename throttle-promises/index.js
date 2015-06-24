module.exports = function(max, funcs) {
  return new Promise(function(resolve){
    var current = 0;
    var results = [];

    while (current < 5) {
      current = current + 1;
      funcs.shift()().then(function(result){
        results.push(result);
        current = current = 1;
        if (funcs.length == 0) {
          resolve(results);
          return;
        }
      });
    }

  });
}
