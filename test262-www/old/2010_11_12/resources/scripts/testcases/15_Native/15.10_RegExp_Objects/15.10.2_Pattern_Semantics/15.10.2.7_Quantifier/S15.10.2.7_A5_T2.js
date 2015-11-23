// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.2.7_A5_T2;
* @section: 15.10.2.7;
* @assertion: The production QuantifierPrefix :: ? evaluates by returning the two results 0 and 1;
* @description: Execute /java(script)?/.exec("state: java and javascript are vastly different") and check results;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.2.7_A5_T2",

path: "15.10.2.7",

description: "Execute /java(script)?/.exec(\"state: java and javascript are vastly different\") and check results",

test: function testcase() {
   __executed = /java(script)?/.exec("state: java and javascript are vastly different");

__expected = ["java", undefined];
__expected.index = 7;
__expected.input = "state: java and javascript are vastly different";

//CHECK#1
if (__executed.length !== __expected.length) {
	$ERROR('#1: __executed = /java(script)?/.exec("state: java and javascript are vastly different"); __executed.length === ' + __expected.length + '. Actual: ' + __executed.length);
}

//CHECK#2
if (__executed.index !== __expected.index) {
	$ERROR('#2: __executed = /java(script)?/.exec("state: java and javascript are vastly different"); __executed.index === ' + __expected.index + '. Actual: ' + __executed.index);
}

//CHECK#3
if (__executed.input !== __expected.input) {
	$ERROR('#3: __executed = /java(script)?/.exec("state: java and javascript are vastly different"); __executed.input === ' + __expected.input + '. Actual: ' + __executed.input);
}

//CHECK#4
for(var index=0; index<__expected.length; index++) {
	if (__executed[index] !== __expected[index]) {
		$ERROR('#4: __executed = /java(script)?/.exec("state: java and javascript are vastly different"); __executed[' + index + '] === ' + __expected[index] + '. Actual: ' + __executed[index]);
	}
}


 }
});

