/// Copyright (c) 2009 Microsoft Corporation 
/// 
/// Redistribution and use in source and binary forms, with or without modification, are permitted provided
/// that the following conditions are met: 
///    * Redistributions of source code must retain the above copyright notice, this list of conditions and
///      the following disclaimer. 
///    * Redistributions in binary form must reproduce the above copyright notice, this list of conditions and 
///      the following disclaimer in the documentation and/or other materials provided with the distribution.  
///    * Neither the name of Microsoft nor the names of its contributors may be used to
///      endorse or promote products derived from this software without specific prior written permission.
/// 
/// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR
/// IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS
/// FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE
/// FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
/// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
/// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
/// OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
/// ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.



ES5Harness.registerTest({

    id: "15.4.4.20-9-c-i-27",

    path: "TestCases/chapter15/15.4/15.4.4/15.4.4.20/15.4.4.20-9-c-i-27.js",

    description: "Array.prototype.filter - This object is the Arguments object which implements its own property get method (number of arguments is greater than number of parameters)",

    test: function testcase() {

        function callbackfn(val, idx, obj) {
            if (idx === 0) {
                return val === 11;
            } else if (idx === 1) {
                return val === 12;
            } else if (idx === 2) {
                return val === 9;
            } else {
                return false;
            }
        }

        var func = function (a, b) {
            return Array.prototype.filter.call(arguments, callbackfn);
        };
        var newArr = func(11, 12, 9);

        return newArr.length === 3 && newArr[0] === 11 &&
            newArr[1] === 12 && newArr[2] === 9;
    },

    precondition: function prereq() {
        return fnExists(Array.prototype.filter);
    }

});
