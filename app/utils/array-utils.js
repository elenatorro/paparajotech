export var ArrayUtils = {
  sample(array, amount=1) {
    return array.slice(0, amount);
  },

  shuffle(array) {
    var i, j, arrayLength, currentElement;

    arrayLength = array.length;

    for (i = arrayLength; i; i--) {
      j = Math.floor(Math.random() * i);
      currentElement = array[i - 1];
      array[i - 1] = array[j];
      array[j] = currentElement;
    }

    return array;
  }
};
