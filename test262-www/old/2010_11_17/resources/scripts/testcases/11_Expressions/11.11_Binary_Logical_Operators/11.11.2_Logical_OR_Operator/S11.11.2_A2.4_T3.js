// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.11.2_A2.4_T3;
 * @section: 11.11.2;
 * @assertion: First expression is evaluated first, and then second expression;
 * @description: Checking with undeclarated variables;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.11.2_A2.4_T3",

path: "11.11.2",

description: "Checking with undeclarated variables",

test: function testcase() {
   //CHECK#1
try {
    S11_11_2_A2_4_T3_x || (S11_11_2_A2_4_T3_x = true);
    $ERROR('#1.1: S11_11_2_A2_4_T3_x || (S11_11_2_A2_4_T3_x = true) throw ReferenceError. Actual: ' + (S11_11_2_A2_4_T3_x || (S11_11_2_A2_4_T3_x = true)));  
}
catch (e) {
  if ((e instanceof ReferenceError) !== true) {
      $ERROR('#1.2: S11_11_2_A2_4_T3_x || (S11_11_2_A2_4_T3_x = true) throw ReferenceError. Actual: ' + (e));  
  }
}

//CHECK#2
if (((S11_11_2_A2_4_T3_y = true) || S11_11_2_A2_4_T3_y) !== true) {
    $ERROR('#2: ((S11_11_2_A2_4_T3_y = true) || S11_11_2_A2_4_T3_y) === true');
}


 }
});

