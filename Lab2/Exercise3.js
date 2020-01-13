const promise1 = Promise.resolve(101);
const promise2 = "follow the white";
const promise3 = new Promise(function(resolve, reject) {
  setTimeout(resolve, 100, 'rabbit.. neo');
});

Promise.all([promise1, promise2, promise3]).then(function(values) {
  console.log(values);
});