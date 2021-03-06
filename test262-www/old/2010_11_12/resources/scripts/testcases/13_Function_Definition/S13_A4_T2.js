// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S13_A4_T2;
* @section: 13;
* @assertion: The production FunctionDeclaration: "function Identifier ( FormalParameterList_opt ) { FunctionBody }" is processed by function declarations;
* @description: Declaring a function that uses prefix increment operator within its "return" Expression;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S13_A4_T2",

path: "13",

description: "Declaring a function that uses prefix increment operator within its \"return\" Expression",

test: function testcase() {
   function __func(arg){return ++arg;};

//////////////////////////////////////////////////////////////////////////////
//CHECK#1 
if (typeof __func !== "function") {
	$ERROR('#1: typeof __func === "function". Actual: typeof __func ==='+typeof __func);
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__func(1) !== 2) {
	$ERROR('#2: __func(1) === 2. Actual: __func(1) ==='+__func(1));
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

