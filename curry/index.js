module.exports = function curry(fn, args) {
  if (typeof args === 'undefined') args = [];

  return function(){
    var newArgs = args.concat(Array.prototype.slice.call(arguments, 0));

    if (newArgs.length == fn.length) {
      return fn.apply(this, newArgs);
    } else {
      return curry(fn, newArgs);
    }
  }
}
