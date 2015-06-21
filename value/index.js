module.exports = function value(something){
  if (typeof something === 'function') {
    return value(something());
  } else {
    return something;
  }
}
