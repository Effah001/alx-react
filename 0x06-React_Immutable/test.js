const { getImmutableObject } = require('./0-fromjs');

// Test object
const testObj = {
  fear: true,
  smell: -1033575916.9145899,
  wall: false,
  thing: -914767132
};

const immutableMap = getImmutableObject(testObj);

console.log('Is Immutable:', require('immutable').isImmutable(immutableMap));
console.log('Content:', immutableMap.toJS());