module.exports = function flatten(arr) {
  newArr = [];

  for (i in arr) {
    if (typeof arr[i] === 'object') {
      newArr = newArr.concat(flatten(arr[i]));
    } else {
      newArr.push(arr[i])
    }
  }

  return newArr;
}
