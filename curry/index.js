function argsArray(argsObject) {
  return Array.prototype.slice.call(argsObject, 0);
}

module.exports = function curry(f, n) {
  var args = argsArray(arguments);
  if (typeof n === 'undefined')
      args[1] = f.length;
  if (n === args.length - 2)
      return f.apply(undefined, args.slice(2));
  return function() {
      return curry.apply(undefined, args.concat(argsArray(arguments)));
  };
}
