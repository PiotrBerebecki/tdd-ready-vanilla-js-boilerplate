/*eslint no-undef: 0*/

/* The code block below ONLY Applies to Node.js - This Demonstrates
   re-useability of JS code in both Back-end and Front-end! #isomorphic */
/* istanbul ignore if */
if (typeof module !== 'undefined' && module.exports) {
  var QUnit = require('qunitjs'); // require QUnit node.js module
  // alias the QUnit.test method so we don't have to change all our tests
  var test = QUnit.test; // stores a copy of QUnit.test
  require('qunit-tap')(QUnit, console.log); // use console.log for test output
  var timer = require('../../public/assets/js/app.js'); // load our getChange method
}




test('It should return return 2', function(assert) {
  assert.equal(timer(), 2); // just so we know everything loaded ok
});




/* istanbul ignore next */
if (typeof module !== 'undefined' && module.exports) { QUnit.load(); } // run the tests
