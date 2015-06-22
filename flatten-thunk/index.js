module.exports = function flattenThunk(fn) {
  return function(cb) {
    var err;
    next(fn);

    function next(func) {
      func.call(this, function(thisErr, result){
        err = thisErr;

        if (typeof result === 'function') {
          next(result);
        } else {
          cb(err, result);
        }
      });
    }
  }
}
