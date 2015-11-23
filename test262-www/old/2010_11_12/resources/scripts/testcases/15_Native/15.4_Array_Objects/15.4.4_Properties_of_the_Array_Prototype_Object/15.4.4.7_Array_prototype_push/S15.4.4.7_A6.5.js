// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.4.4.7_A6.5;
* @section: 15.4.4.7, 15.2.4.7, 12.6.4;
* @assertion: The push property of Array has the attribute DontEnum;
* @description: Checking use propertyIsEnumerable, for-in;
*/



// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.4.7_A6.5",

path: "15.4.4.7, 15.2.4.7, 12.6.4",

description: "Checking use propertyIsEnumerable, for-in",

test: function testcase() {
   //CHECK#1
if (Array.propertyIsEnumerable('push') !== false) {
  $ERROR('#1: Array.propertyIsEnumerable(\'push\') === false. Actual: ' + (Array.propertyIsEnumerable('push')));
}

//CHECK#2
var result = true;
for (var p in Array){
  if (p === "push") {
    result = false;
  }  
}

if (result !== true) {
  $ERROR('#2: result = true; for (p in Array) { if (p === "push") result = false; }  result === true;');
}


 }
});

