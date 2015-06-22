module.exports = function(fn){
  res = fn.call();
  var setupDone;

  it(res.desc, function(){
    runs(function(){
      res.setup(function(){
        setupDone = true;
      });
    })

    waitsFor(function(){
      return setupDone;
    });

    runs(res.test);
  });
}
