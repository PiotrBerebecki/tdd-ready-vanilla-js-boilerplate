// console.clear();

function timer() {

  // if (Math.random() > 0.99) return 222;
  return 2;
}


/* The code block below ONLY Applies to Node.js - This Demonstrates
   re-useability of JS code in both Back-end and Front-end! #isomorphic */
/* istanbul ignore next */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = timer;  // allows CommonJS/Node.js require()
}
