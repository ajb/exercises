module.exports = function(func, ms) {
  var timeout;

  return function(){
    var ctx = this;
    var args = arguments;
    clearTimeout(timeout);

    timeout = setTimeout(function(){
      func.apply(ctx, args);
    }, ms)
  }
}
