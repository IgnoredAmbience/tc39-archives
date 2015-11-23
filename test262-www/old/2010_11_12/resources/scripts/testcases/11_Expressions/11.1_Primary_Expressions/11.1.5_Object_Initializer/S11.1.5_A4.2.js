// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.1.5_A4.2;
* @section: 11.1.5;
* @assertion: The PropertyName is not nullLiteral;
* @description: Checking if execution of "var object = {null : true}" fails;
* @negative
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.1.5_A4.2",

path: "11.1.5",

description: "Checking if execution of \"var object = {null : true}\" fails",

test: function testcase() {
  try {
     (function() {
         eval("//CHECK#1\r\nvar object = {null : true};\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

