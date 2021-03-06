// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S13_A13_T1;
* @section: 13;
* @assertion: Deleting arguments[i] leads to breaking the connection to local reference;
* @description: Deleting arguments[i]; 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S13_A13_T1",

path: "13",

description: "Deleting arguments[i]",

test: function testcase() {
   function __func(__arg){
  delete arguments[0];
  if (arguments[0] !== undefined) {
    $ERROR('#1.1: arguments[0] === undefined');
  }
  return __arg;
}

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__func(1) !== 1) {
	$ERROR('#1.2: __func(1) === 1. Actual: __func(1) ==='+__func(1));
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

