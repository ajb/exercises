module.exports = function(max, funcs) {
  return new Promise(function(resolve){
    var current = 0;
    var results = [];
    var needed = funcs.length;
    next();

    function next() {
      if (!funcs.length) return;
      if (current < 5) {
        current++;
        funcs.shift()().then(function(result){
          results.push(result);
          current--;
          if (results.length === needed) {
            console.log('resolve');
            resolve(results);
          } else {
            console.log('next');
            next();
          }
        });
        next();
      }
    }
  });
}
