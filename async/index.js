module.exports.sequence = function(funcs){
  return function(cb) {
    var err, data;
    next(cb);

    function next(done) {
      if (funcs.length === 0) {
        return done(err, data);
      } else {
        funcs.shift()(function(thisErr, thisData){
          err = thisErr;
          data = thisData;
          next(done);
        }, data);
      }
    }
  }
}

module.exports.parallel = function(funcs){
  return function(cb) {
    var err;
    var data = [];

    for (i in funcs) {
      funcs[i].call(this, function(thisErr, thisData){
        err = thisErr;
        data.push(thisData);
        if (data.length == funcs.length) cb(err, data);
      });
    }
  }
}

module.exports.race = function(funcs){
  return function(cb) {
    var err;
    var data = [];

    for (i in funcs) {
      funcs[i].call(this, function(thisErr, thisData){
        err = thisErr;
        data.push(thisData);
        cb(err, data);
      });
    }
  }
}
