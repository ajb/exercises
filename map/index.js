module.exports = function(things, transformer, ctx) {
  var newThings = [];

  for (i in things){
    newThings.push(transformer.call(ctx, things[i], i, things));
  }

  return newThings;
}
