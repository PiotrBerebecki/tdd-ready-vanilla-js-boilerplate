/*eslint no-undef: 0*/



// test('assert.equal - Function addOne should add 1', function(assert) {
//   assert.equal(addOne(1), 2);
// });


// FAILING TEST
// test('assert.equal - Function addOneAsync should add 1 asynchronously', function(assert) {
//   assert.equal(addOneAsync(1), 2);
// });


// test('assert.async - Function addOneAsyncWithCallback should add 1 asynchronously', function(assert) {
//   var done = assert.async();
//
//   addOneAsyncWithCallback(1, function(err, res) {
//     assert.equal(res, 2);
//     done();
//   });
// });


// FAILING TEST
// assert.equal cannot be used on arrays or objects
// test('assert.equal - Function addOneToEveryElement should add 1', function(assert) {
//   var arr = [1, 2, 3];
//   var ans = [2, 3, 4];
//
//   assert.equal(addOneToEveryElement(arr), ans);
// });


// assert.deepEqual can be used on arrays or objects
// test('assert.deepEqual - Function addOneToEveryElement should add 1', function(assert) {
//   var arr = [1, 2, 3];
//   var ans = [2, 3, 4];
//
//   assert.deepEqual(addOneToEveryElement(arr), ans);
// });


// assert.ok performs a boolean check
// test('assert.ok - Function isAboveTen works', function(assert) {
//   assert.ok(isAboveTen(11));
// });


// assert.deepEqual can be used on arrays or objects
// test('assert.deepEqual - Function changeUsername works', function(assert) {
//   var user = {
//     username: 'Bella'
//   };
//
//   var updatedUser = {
//     username: 'Milo'
//   };
//
//   assert.deepEqual(changeUsername(user, 'Milo'), updatedUser);
// });



// FAILING TEST
// assert.deepEqual cannot be used to compare two objects made with different constructors or prototypes
// test('assert.deepEqual - This test fails for objects', function(assert) {
//   function User(name) {
//     this.username = name;
//   }
//
//   var user1 = new User('Bella');
//
//   var user2 = { username: 'Bella' };
//
//   assert.deepEqual(user1, user2);
// });



// assert.propEqual can be used to compare two objects made with different constructors or prototypes
// test('assert.deepEqual - This test fails for objects', function(assert) {
//   function User(name) {
//     this.username = name;
//   }
//
//   var user1 = new User('Bella');
//
//   var user2 = { username: 'Bella' };
//
//   assert.propEqual(user1, user2);
// });
