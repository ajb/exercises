module.exports = function(func, ms) {
  var calledAt = undefined;
  var timeout = undefined;

  return function(){
    var ctx = this;
    var args = arguments;
    var msUntil = ms - (+new Date() - calledAt);

    function callIt(){
      clearTimeout(timeout);
      calledAt = +new Date();
      func.apply(ctx, args);
    }

    if (!calledAt || msUntil <= 0) {
      callIt()
    } else {
      clearTimeout(timeout);
      timeout = setTimeout(callIt, msUntil);
    }
  }
}
