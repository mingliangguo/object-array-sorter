# object-array-sorter

=========

A small library that recursively sort the array properties in a given object. This could be helpful when you want to compare two json object/files.

## Installation

```bash

npm install object-array-sorter

```

## Usage

> Note: The sorter utility has a default sort comparator which will sort the array values for primitive types (`string`, `number`), and it also allows you to provide a custom comparator used to sort complex object elements.

```javascript

const objectArraySorter = require('object-array-sorter');


let obj = {
    a: "0",
    b: {
       e: [5, 7, 3],
       f: ['tiger', 'cat', 'dog', 'horse']
    },
    c: [5, 2, 9]
};

objectArraySorter(obj);

console.log(JSON.stringify(obj, null, 2));

```
  
  
Output should be 

```javascript
{
    a: "0",
    b: {
       e: [3, 5, 7],
       f: ['cat', 'dog', 'horse', 'tiger']
    },
    c: [2, 5, 9]
}
```


## Tests

  `npm run tests`

## LICENSE

MIT
