

function addOne(n) {
  return n + 1;
}


// How to test this?
function addOneAsync(n) {
  setTimeout(function() {
    return n + 1;
  }, 200);
}



function addOneAsyncWithCallback(n, cb) {
  setTimeout(function() {
    cb(null, n + 1);
  }, 200);
}



function addOneToEveryElement(arr) {
  return arr.map(el => el + 1);
}



function isAboveTen(n) {
  return n > 10;
}



function changeUsername(obj, newName) {
  obj.username = newName;
  return obj;
}
