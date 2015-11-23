// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.4.1_A3.1;
* @section: 11.4.1;
* @assertion: If the property has the DontDelete attribute, return false;
* @description: Checking declared variable; 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.4.1_A3.1",

path: "11.4.1",

description: "Checking declared variable",

test: function testcase() {
   //CHECK#1
var x = 1;
if (delete x !== false) {
  $ERROR('#1: var x = 1; delete x === false');
}

//CHECK#2
var y = 1;
if (delete this.y !== false) {
  $ERROR('#2: var y = 1; delete this.y === false');
}

//CHECK#3
function MyFunction(){};
if (delete MyFunction !== false) {
  $ERROR('#3: function MyFunction(){}; delete MyFunction === false');
}

//CHECK#4
function MyFunction(){};
var MyObject = new MyFunction();
if (delete MyObject !== false) {
  $ERROR('#4: function MyFunction(){}; var MyObject = new MyFunction(); delete MyObject === false');
}

//CHECK#5
if (delete MyObject !== false) {
  $ERROR('#5: function MyFunction(){}; var MyObject = new MyFunction(); delete MyObject === false');
}

 }
});

