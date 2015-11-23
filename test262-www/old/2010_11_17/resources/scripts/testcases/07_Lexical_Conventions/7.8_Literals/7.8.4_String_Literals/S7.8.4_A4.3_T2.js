// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.8.4_A4.3_T2;
 * @section: 7.8.4;
 * @assertion: NonEscapeSequence is not EscapeCharacter;
 * @description: EscapeCharacter :: DecimalDigits :: 7;
 * @negative
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.8.4_A4.3_T2",

path: "7.8.4",

description: "EscapeCharacter :: DecimalDigits :: 7",

test: function testcase() {
  try {
     (function() {
         eval("//CHECK#1\r\n\"\\7\"\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

