var Middleware = function(){
  this.middlewares = [];
}

Middleware.prototype.use = function(func){
  this.middlewares.push(func);
}

Middleware.prototype.go = function(cb){
  var i = 0;
  var ctx = this;

  function next() {
    ctx.middlewares[i].call(
      ctx,
      ctx.middlewares[i+=1] ? next : cb.bind(ctx)
    )
  }

  next();
}

module.exports = Middleware;
