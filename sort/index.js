// https://en.wikipedia.org/wiki/Insertion_sort
module.exports = function(unsorted) {
  var sorted = [];

  for (i in unsorted) {
    if (sorted.length) {
      for (var j = 0; j < sorted.length; j++) {
        if (sorted[j] > unsorted[i]) {
          sorted.splice(j, 0, unsorted[i]);
          break;
        }
      }
    } else {
      sorted.push(unsorted[i]);
    }
  }

  return sorted;
}
