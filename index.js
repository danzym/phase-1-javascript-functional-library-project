function myEach(collection, callback) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      callback(collection[i]);
    }
  } else {
    for (let key in collection) {
      callback(collection[key]);
    }
  }
  return collection;
}

function myMap(collection, callback) {
  const result = [];
  myEach(collection, function (item) {
    result.push(callback(item));
  });
  return result;
}

function myReduce(collection, callback, initialValue) {
  if (Array.isArray(collection)) {
    let accumulator = initialValue !== undefined ? initialValue : collection[0];
    const startIndex = initialValue !== undefined ? 0 : 1;

    for (let i = startIndex; i < collection.length; i++) {
      accumulator = callback(accumulator, collection[i], collection);
    }

    return accumulator;
  } else if (typeof collection === "object" && collection !== null) {
    let accumulator =
      initialValue !== undefined
        ? initialValue
        : collection[Object.keys(collection)[0]];
    const keys = Object.keys(collection);
    const startIndex = initialValue !== undefined ? 0 : 1;

    for (let i = startIndex; i < keys.length; i++) {
      const key = keys[i];
      accumulator = callback(accumulator, collection[key], collection);
    }

    return accumulator;
  }

  return initialValue;
}

function myFind(collection, predicate) {
  for (let i = 0; i < collection.length; i++) {
    if (predicate(collection[i])) {
      return collection[i];
    }
  }
  return undefined;
}

function myFilter(collection, predicate) {
  const result = [];
  myEach(collection, function (item) {
    if (predicate(item)) {
      result.push(item);
    }
  });
  return result;
}

function mySize(collection) {
  if (Array.isArray(collection) || typeof collection === "string") {
    return collection.length;
  } else {
    return Object.keys(collection).length;
  }
}

function myFirst(array, n) {
  if (n === undefined) {
    return array[0];
  } else {
    return array.slice(0, n);
  }
}

function myLast(array, n) {
  if (n === undefined) {
    return array[array.length - 1];
  } else {
    return array.slice(-n);
  }
}

function myKeys(object) {
  return Object.keys(object);
}

function myValues(object) {
  return Object.values(object);
}

module.exports = {
  myEach,
  myMap,
  myReduce,
  myFind,
  myFilter,
  mySize,
  myFirst,
  myLast,
  myKeys,
  myValues,
};
