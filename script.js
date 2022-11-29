// Task 1:
// A - Print odd numbers in an array
// anonymous function
var arr = [1,2,3,4,5,6,7];
var result = [];
var odd = function(arr){
for (var i = 0; i < arr.length; i++) {
if (arr[i] % 2 != 0) {    
    result.push(arr[i])
}
}
return result;
};
console.log("Odd numbers in an array using anonymous function = " + odd(arr));
// IIFE
(function(arr){
    var result =[];
    for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {    
        result.push(arr[i])
    }
    }
    console.log("Odd numbers in an array using IIFE = " + result);
}
)([1,2,3,4,5,6,7]);
//-----------------------------------------------------------------------------------------
// B - Convert all the strings to title caps in a string array
// anonymous function
var arr = ["john","doe","fred","freddy"];
var result = [];
var stringCap = function(arr){
for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    result.push(arr[i]);
}
return result;
};
console.log("Strings to title caps in a string array using anonymous function = " + stringCap(arr));
// IIFE
(function(arr){
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
        result.push(arr[i]);
    }
    console.log("Strings to title caps in a string array using IIFE = " + result);
    }
)(["john","doe","fred","freddy"]);
//---------------------------------------------------------------------------------------------
// C - Sum of all numbers in an array
// anonymous function
var arr = [1,2,3,4,5,6,7];
var result = 0;
var sum = function(arr){
for (var i = 0; i < arr.length; i++) {
result += arr[i];
}
return result;
};
console.log("Sum of all numbers in an array using anonymous function = " + sum(arr));
// IIFE
(function(arr){
    var result = 0;
    for (var i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    console.log("Sum of all numbers in an array using IIFE = " + result);
})([1,2,3,4,5,6,7]);
//------------------------------------------------------------------------------------------------
// D - Return all the prime numbers in an array
// anonymous function
var a = [2,3,4,5,6,7];
var prime = [];
var isPrime = function(item) {
    var identifier = item / 2;
      for (var j = 2; j <= identifier; j++) {
       if ((item % j) == 0) { 
        return false;
       } 
     }
     return true;
};
for (var index = 0; index < a.length; index++) {
  if (isPrime(a[index])) {
      prime.push(a[index])
  }
}
console.log("Prime numbers in an array using anonymous function = " + prime);
// IIFE
var a = [2,3,4,5,6,7];
(function isPrime(item) {
    var pprime = [];
    for (let i = 0; i < item.length; i++) {
        let flag = 0;
            for (let j = 2; j < item[i]; j++) {
            if (item[i] % j == 0) {
                flag = 1;
                break;
            }
        }
            if (item[i] > 1 && flag == 0) {
                pprime.push(item[i])
        }
    }
    console.log("Prime numbers in an array using IIFE = " + pprime);
}
)(a);
//------------------------------------------------------------------------------------------------
// E - Return all the palindromes in an array
// anonymous function
var arr = ["101","202","222","123","543","545"];
var result = [];
var temp = "";
var palindromeArr = function(arr){
for (var i = 0; i < arr.length; i++) {
temp = arr[i].split('').reverse().join('');
if(arr[i] == temp){
    result.push(temp);
}
}
return result;
};
console.log("Palindromes in an array using anonymous function = " + palindromeArr(arr));
// IIFE
(function(arr){
    var result = [];
    var temp = "";
    for (var i = 0; i < arr.length; i++) {
        temp = arr[i].split('').reverse().join('');
        if(arr[i] == temp){
            result.push(temp);
        }    
    }
    console.log("Palindromes in an array using IIFE= " + result);
    })(["101","202","222","123","543","545"]);
//------------------------------------------------------------------------------------------------
// F - Return median of two sorted arrays of the same size.
// anonymous function
var arr1 = [1,2,3,4,5];
var arr2 = [6,7,8,9,10];
var arr3 = arr1.concat(arr2);
arr3.sort(function(a, b){return a - b});
var result = 0;
var medianValue = function(arr3){
    if(arr3.length % 2 == 0){
        for (var i = 0; i <= arr3.length/2; i++) {
            if(i == arr3.length/2){
                result = (arr3[i] + arr3[i-1])/2;
            }
            }
    } else {
        for (var i = 0; i <= Math.floor(arr3.length/2); i++) {
                    if(i == Math.floor(arr3.length/2)){
                        result = arr3[i];
                    }
                    }     
    }
return result;
};
console.log("Median of two sorted arrays using anonymous function = " + medianValue(arr3));
// IIFE
var arr1 = [1,2,3,4,5];
var arr2 = [6,7,8,9,10];
var arr4 = arr1.concat(arr2);
arr4.sort(function(a, b){return a - b});
(function(arr){
    var result1 = 0;
    if(arr.length % 2 == 0){
        for (var i = 0; i <= arr.length/2; i++) {
            if(i == arr.length/2){
                result1 = (arr[i] + arr[i-1])/2;
            }
            }
    } else {
        for (var i = 0; i <= Math.floor(arr.length/2); i++) {
                    if(i == Math.floor(arr.length/2)){
                        result1 = arr[i];
                    }
                    }     
    }
console.log("Median of two sorted arrays using IIFE = " + result1);
})(arr4);
//------------------------------------------------------------------------------------------------
// G - Remove duplicates from an array
// anonymous function
var arr = ["John", "doe", "fred","freddy", "John", "fred"];
   var removeDuplicates = function(arr) {
        return arr.filter((item,
            index) => arr.indexOf(item) === index);
    }
 console.log("Remove duplicates from an array using anonymous function = " + removeDuplicates(arr));
 //IIFE
 (function(arr) {
    console.log("Remove duplicates from an array using IIFE = " + arr.filter((item,
        index) => arr.indexOf(item) === index));
}
)(["John", "doe", "fred","freddy", "John", "fred"])
//------------------------------------------------------------------------------------------------
// H - Rotate an array by k times
// anonymous function
var arr = [1, 2, 3, 4, 5]
var k = 2;
const rotateArray = function(arr, k) {
    for (let i = 0; i < k; i++) {
        arr.unshift(arr.pop());
    }
    return arr;
  }
  console.log("Rotate an array by k times using anonymous function = " + rotateArray(arr, k));
// IIFE
  var arr = [1, 2, 3, 4, 5]
  var k = 3;
  (function(arr, k) {
    for (let i = 0; i < k; i++) {
        arr.unshift(arr.pop());
    }
    console.log("Rotate an array by k times using IIFE = " + arr);
  }
  )(arr, k);
//------------------------------------------------------------------------------------------------
// Task 2:
// A - Print odd numbers in an array
// Arrow function
var arr = [1,2,3,4,5,6,7];
var result = [];
var odd = (arr) =>{
for (var i = 0; i < arr.length; i++) {
if (arr[i] % 2 != 0) {    
    result.push(arr[i])
}
}
return result;
};
console.log("Odd numbers in an array using arrow function = " + odd(arr));
//------------------------------------------------------------------------------------------------
// B - Convert all the strings to title caps in a string array
// Arrow function
var arr = ["john","doe","fred","freddy"];
var result = [];
var stringCap = (arr) =>{
for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    result.push(arr[i]);
}
return result;
};
console.log("Strings to title caps using arrow function = " + stringCap(arr));
//------------------------------------------------------------------------------------------------
// C - Sum of all numbers in an array
// Arrow function
var arr = [1,2,3,4,5,6,7];
var result = 0;
var sum = (arr) =>{
for (var i = 0; i < arr.length; i++) {
result += arr[i];
}
return result;
};
console.log("Sum of all numbers in an array using arrow function = " + sum(arr));
//------------------------------------------------------------------------------------------------
// D - Return all the prime numbers in an array
// Arrow function
var a = [2,3,4,5,6,7];
var prime = [];
var isPrime = (item) => {
    var identifier = item / 2;
      for (var j = 2; j <= identifier; j++) {
       if ((item % j) == 0) { 
        return false;
       } 
     }
     return true;
};
for (var index = 0; index < a.length; index++) {
  if (isPrime(a[index])) {
      prime.push(a[index])
  }
}
console.log("Prime numbers in an array using arrow function = " + prime);
//------------------------------------------------------------------------------------------------
// E - Return all the palindromes in an array
// Arrow function
var arr = ["101","202","222","123","543","545"];
var result = [];
var temp = "";
var palindromeArr = (arr) =>{
for (var i = 0; i < arr.length; i++) {
temp = arr[i].split('').reverse().join('');
if(arr[i] == temp){
    result.push(temp);
}
}
return result;
};
console.log("Palindromes in an array using arrow function = " + palindromeArr(arr));
//------------------------------------------------------------------------------------------------