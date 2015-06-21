module.exports = function(fn){
  var called, returnVal;

  return function(){
    if (called) {
      return returnVal;
    } else {
      called = true;
      return (returnVal = fn.apply(this, arguments));
    }
  }
}
