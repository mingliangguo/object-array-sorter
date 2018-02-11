'use strict';

const defaultComparator = (a, b) => {
    if (typeof a === 'string' && typeof b === 'string') {
        return a.localeCompare(b);
    }

    if (typeof a === 'number' && typeof b === 'number') {
        return a - b;
    }
    return 1;
};

let objectSorter = (obj, comparator = defaultComparator) => {
  if (!obj) {
    return;
  }
  Object.values(obj)
    .filter(item => typeof item === "object")
    .forEach(item => {
      if (Array.isArray(item)) {
        item.sort(comparator);
        item
          .filter(k => typeof k === "object")
          .forEach(k => objectSorter(k, comparator));
      } else {
        objectSorter(item, comparator);
      }
    });
};
module.exports = objectSorter;
