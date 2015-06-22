module.exports = function flattenThunk(fn) {
  var err;

  return function(cb) {
    function callFn(func) {
      func.call(this, function(thisErr, result){
        err = thisErr;

        if (typeof result === 'function') {
          callFn(result);
        } else {
          cb(err, result);
        }
      });
    }

    callFn(fn);
  }
}
