// Single Threaded
console.log('First');

setTimeout(() => {
  console.log('Third');
}, 0);

console.log('Second');
