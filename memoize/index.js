module.exports = function(func){
  var memo = {};

  return function() {
    var key = JSON.stringify(arguments);

    if (!memo[key])
      memo[key] = func.apply(this, arguments);

    return memo[key]
  }
}
