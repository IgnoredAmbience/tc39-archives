// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.11.2_A2.1_T2;
* @section: 11.11.2, 8.7.1;
* @assertion: Operator x || y uses GetValue;
* @description: If GetBase(x) is null, throw ReferenceError;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.11.2_A2.1_T2",

path: "11.11.2, 8.7.1",

description: "If GetBase(x) is null, throw ReferenceError",

test: function testcase() {
   //CHECK#1
try {
  S11_11_2_A2_1_T2_x || true;
  $ERROR('#1.1: S11_11_2_A2_1_T2_x || true throw ReferenceError. Actual: ' + (S11_11_2_A2_1_T2_x || true));  
}
catch (e) {
  if ((e instanceof ReferenceError) !== true) {
      $ERROR('#1.2: S11_11_2_A2_1_T2_x || true throw ReferenceError. Actual: ' + (e));  
  }
}

 }
});

