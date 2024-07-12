function isObject(item) {
    return item && typeof item === 'object' && !Array.isArray(item);
  }
  function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i], i, collection);
      }
    } else if (typeof collection === 'object' && collection !== null) {
      const keys = Object.keys(collection);
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        callback(collection[key], key, collection);
      }
    }
    return collection; // Return the original collection at the end
  }
  
  function myMap(collection, callback) {
    let result = [];
    
    if (isObject(collection)) {
      collection = Object.values(collection);
    }
    
    for (let i = 0; i < collection.length; i++) {
      result.push(callback(collection[i], i, collection));
    }
    
    return result;
  }
  function myReduce(collection, callback, acc) {
    let startIdx = 0;
    
    // Handle case when accumulator is not provided
    if (acc === undefined) {
      if (Array.isArray(collection)) {
        if (collection.length === 0) {
          throw new TypeError('Reduce of empty array with no initial value');
        }
        acc = collection[0];
        startIdx = 1;
      } else if (typeof collection === 'object' && collection !== null) {
        const keys = Object.keys(collection);
        if (keys.length === 0) {
          throw new TypeError('Reduce of empty object with no initial value');
        }
        acc = collection[keys[0]];
        startIdx = 1;
      } else {
        throw new TypeError('Reduce of empty collection with no initial value');
      }
    }
  
    // Iterate over collection and apply callback to each element
    if (Array.isArray(collection)) {
      for (let i = startIdx; i < collection.length; i++) {
        acc = callback(acc, collection[i], i, collection);
      }
    } else if (typeof collection === 'object' && collection !== null) {
      const keys = Object.keys(collection);
      for (let i = startIdx; i < keys.length; i++) {
        const key = keys[i];
        acc = callback(acc, collection[key], key, collection);
      }
    }
  
    return acc; // Return the accumulator after iteration
  }
  
  
  function myFind(collection, predicate) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) {
        return collection[i];
      }
    }
  }
  function myFilter(collection, predicate) {
    let result = [];
    
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) {
        result.push(collection[i]);
      }
    }
    
    return result;
  }
  function mySize(collection) {
    if (isObject(collection)) {
      return Object.keys(collection).length;
    } else {
      return collection.length;
    }
  }
  function myFirst(collection, n) {
    if (n === undefined) {
      return collection[0];
    } else {
      return collection.slice(0, n);
    }
  }
  function myLast(collection, n) {
    if (n === undefined) {
      return collection[collection.length - 1];
    } else {
      return collection.slice(-n);
    }
  }
  function myKeys(obj) {
    if (typeof obj !== 'object' || obj === null) {
      throw new TypeError('Object.keys called on non-object');
    }
  
    const keys = [];
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        keys.push(key);
      }
    }
    return keys;
  }
  
  
  function myValues(object) {
    return Object.values(object);
  }
                