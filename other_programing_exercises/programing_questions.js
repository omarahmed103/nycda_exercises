console.log('Section 1');
console.log('---------------------------------------1');

// Pair program with your partner to solve these problem sets!
// Drivers type in the code as directed by the Navigator.
// Navigators, try not to dictate the code verbatim, instead
// use conceptual/technical language to describe your solution.

// 1. Write a function that returns its argument plus two.

function addTwo(argument) {
    //ENTER YOUR CODE HERE
}

// console.log(addTwo(2)===4);
// console.log(addTwo(-2)===0);
// console.log(addTwo(1.5)===3.5);
///

console.log('---------------------------------------2');
////////////////////////////////////////////////////////////////
// 2. Write a function that returns a boolean stating if the argument is greater than 10.
function isGreaterThanTen(argument) {
    ///ENTER YOUR CODE HERE
}

// console.log(isGreaterThanTen(101) === 5);
// console.log(isGreaterThanTen(4) === 3);
// console.log(isGreaterThanTen(10) === 10);

console.log('---------------------------------------3');
//////////////////////////////////////////////////////////////
//3. Write a method that returns the greater of the two arguments.
// Assume that both arguments are integers.
function whichIsGreater(argument1, argument2) {
    ///ENTER YOUR CODE
}

// console.log(whichIsGreater(15, 9) === 15);
// console.log(whichIsGreater(10, 8) === 10);
// console.log(whichIsGreater(99, 100) === 100);

console.log('---------------------------------------4');

//4. Write a method that returns the negative value of the argument.
// Assume that the argument will be a positive number.
function returnNegative(argument) {


}
// console.log(returnNegative(15) === -15);
// console.log(returnNegative(1) === -1);
// console.log(returnNegative(55)) === -55);

console.log('---------------------------------------5');

// 5. Write a function that returns the remainder of it's arguments.

function returnNegative(argument1, argument2) {
    //ENTER YOUR CODE HERE
}

// console.log(returnNegative(25, 5) === 0);
// console.log(returnNegative(8, 3) === 2);
// console.log(returnNegative(33, 5) === 3);

console.log('---------------------------------------');

console.log('Section 2'); // MEDIUM

console.log('---------------------------------------6');

// Write a function exponentiate that accepts a number and a power to raise that number to. 
// For the present, assume the power argument will always be a positive integer value.


function exponentiate(num1, num2) {
    //Enter Code Here
    let number = num1
    for (let i = 1; i < num2; i++){
      num1 *= number 
    }
    return num1
    
}

console.log(exponentiate(2, 3) === 8);
console.log(exponentiate(3, 5) === 243);
console.log(exponentiate(4, 9) === 262144);

console.log('---------------------------------------7');

// 7. The function should sum the first two numbers passed in, and then round them down to the nearest integer. 
// The rounded sum should then be multiplied by the third argument, rounded up and returned.

function sumMultiplyAndRound(num1, num2, num3) {
    //Enter Code Here
    let number = Math.floor(num1+num2)
   return number = Math.ceil(number*num3)
}

console.log(sumMultiplyAndRound(2, 3.5, 6.2) === 31)
console.log(sumMultiplyAndRound(2.6, 4, 7.1) === 43)
console.log(sumMultiplyAndRound(1.5, 3.9, 5.2) === 26)

console.log('---------------------------------------8');

// 8. Create a function to fill the empty array with numbers from 0 to 10.

function fillMe() {
    //Enter Code Here
    let array = []
    for (let i = 0; i <= 10; i++){
      array.push(i)
    }
    return array
}

console.log(JSON.stringify(fillMe()) === JSON.stringify([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

console.log('---------------------------------------9');

// 9.Make a function that returns to the second decimal place after dividing.

function twoDecimalPlaces(dividend, divisor) {
  //   //Enter Your Code Here
  // return (dividend/divisor).toFixed(2)
  let number = dividend/divisor
  let string = number.toString()
  let index = string.indexOf(".") + 2
  // console.log(index)
  // console.log(parseInt(string.slice(0, index+1 )))
  return parseFloat(string.slice(0, index+1 ))
  
}

// console.log(8/7)
console.log(twoDecimalPlaces(8, 7).toString() === 1.14.toString());
console.log(twoDecimalPlaces(11, 12).toString() === (0.91).toString());
console.log(twoDecimalPlaces(1123412341234, 22).toString() === (51064197328.81).toString());

console.log('---------------------------------------10');

// 10. Create the function isPrime(num) which will take the num parameter being passed 
// and return true if the parameter is a prime number, otherwise return false.

// Note: A prime number is any number that can only be evenly divided by 1 or itself

function isPrime(num) {
    //Enter Code Here
    if (num <= 2) {
      return true
    }
   for (i=2; i<num; i++) {
     if (num%i===0){
       return false
     } else {
       continue
     }
   }
   return true
}

console.log(isPrime(9) === false);
console.log(isPrime(2) === true);
console.log(isPrime(1117) === true);

console.log('---------------------------------------');

console.log('Section 3');
console.log('---------------------------------------11');
// 11.Create a function that returns a string that is the given string(Str) repeated n times (num).
function repeatStringNumTimes(str, num) {
  let newString = str // abc
  for ( let i = 1; i < num; i ++){
    str = str + newString
    // console.log(str)
  }
  return str
} 
console.log(repeatStringNumTimes("abc", 3) === "abcabcabc");
console.log(repeatStringNumTimes("5", 5) === "55555");
console.log(repeatStringNumTimes("Hello",0)==="Hello");

console.log('---------------------------------------12');
//  12.Create a function that takes a string of words as an argument and returns the longest word as output. If there is a tie, and more than one word are the "longest", return the word that comes later in the string.
function findLongestWord(str) {
  str = str.split(" ")
  let length = 0
  let word = ""
  for (let i = 0; i < str.length; i++){
    
    if (str[i].length >= length){
      length = str[i].length
      word = str[i]
    }
    
  }
  return word
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")==="jumped");
console.log(findLongestWord("loop moop poop goop")==="goop");
console.log(findLongestWord("Pairprogramming is the best")==="Pairprogramming");

console.log('---------------------------------------13');
// 13. Create a function that checks to see if the last character in the passed string matches the target character. Return a boolean. This function will be case insensitive.
// 
function confirmEnding(string, target) {
//ENTER YOUR CODE HERE
if (string[string.length - 1] == target)
  return true
else
  return false
}
console.log(confirmEnding("Pairprogramming","g")===true);
console.log(confirmEnding("ALLCAPS","S")===true);
console.log(confirmEnding("12341234","x")===false);


console.log('---------------------------------------14');
// 14. Write a method that returns the last n digits of its first argument,
//  where n is the second argument.
//  Assume both arguments are non-zero integers.
//  (Input)     =>      (Output)
//  nDigits(1234, 2) => 34
//  nDigits(54321, 4) => 4321
//  nDigits(9752, 1) => 2

// # HINT: What is the return value of 1234 % 100? How about 4 % 100?
function nDigits(argument1, argument2) {
    //ENTER YOUR CODE HERE
    let number = 1
    for (let i = 0; i < argument2; i++){
      number += "0"
    }
    return number = argument1 % number
}

console.log(nDigits(1234, 2) === 34);
console.log(nDigits(567235, 4) === 7235);
console.log(nDigits(999999999, 9) === 999999999);


console.log('---------------------------------------15');
//  15. Create a function that takes nested arrays and mutiplies all of the values inside to return the product of every value;
    
function multiplyAll(arr) {
//ENTER YOUR CODE HERE
let product = 1
for (let i = 0; i < arr.length; i++){
  for (j = 0; j < arr[i].length; j++)
  {
    product *= arr[i][j]
  }
}
  return product
}
console.log(multiplyAll([[1,2],[3,4],[5,6,7]])=== 5040);
console.log(multiplyAll([[1],[2],[3]])=== 6);
console.log(multiplyAll([[5,1],[0.2, 4, 0.5],[3, 9]])===54);






console.log('---------------------------------------');
console.log('Section 4');
console.log('---------------------------------------16');

// 16.Create a function which strips out any zeros from a number, and returns the 'stripped' number.
// If the input is zero, the function should return NaN.
function removeZeros(num) {
    //Enter Code Here
    let newNum 
    let num1 = ""
    if (num === 0){
      return NaN
    }
    else
    {
      let numArray = num.toString()
      newNum = numArray.split(".")
      for (let i = 0; i < newNum[0].length; i++){
        if (newNum[0][i] != 0)
        num1 += (newNum[0][i])
      }
      
      if (newNum.length == 2)
      num1 += "."
      
      for (let j = 0; j< newNum[1].length; j++){
        if (newNum[1][j] != 0)
        num1 += (newNum[1][j])
      }
      
      // let num2 = num1.split(",")
      
    }
    return (parseFloat(num1))
}

console.log(removeZeros(6006606.203) === 6666.23);
console.log(removeZeros(400307102.005) === 43712.5);
console.log(removeZeros(0).toString() === NaN.toString());

console.log('---------------------------------------17');
//17.Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
//

function notInBoth(argument1,argument2){
  function createHashTable(array, hashTable = {}){
    let arrayLength = array.length
    let i = 0
    while(i < arrayLength){
      if(hashTable.hasOwnProperty(array[i]))
        hashTable[array[i]]++
      else
      hashTable[array[i]] = 1 
      i++
    }
    return hashTable
  }
  
  let hashTable = {}
  createHashTable(argument1, hashTable)
  createHashTable(argument2, hashTable)
  
  ////////////////////////////If we do it without using createHashTable function////
  // let hashTable = {}                                                         ////
  // let arrayLength = argument1.length                                         ////
  // let i = 0                                                                  ////
  //   while(i < arrayLength){                                                  ////
  //     if(hashTable.hasOwnProperty(argument1[i]))                             ////
  //       hashTable[argument1[i]]++                                            ////
  //     else                                                                   ////
  //     hashTable[argument1[i]] = 1                                            ////
  //     i++                                                                    ////
  //   }                                                                        ////
  //                                                                            ////
  // argument2Length = argument2.length                                         ////
  // let j = 0                                                                  ////
  // while(j < argument2Length){                                                ////
  //   if(hashTable.hasOwnProperty(argument2[j]))                               ////
  //     hashTable[argument2[j]]++                                              ////
  //   else                                                                     ////
  //   hashTable[argument2[j]] = 1                                              ////
  //   j++                                                                      ////
  // }                                                                          ////
  //////////////////////////////////////////////////////////////////////////////////  
  
   let newArray = []
   for (let key in hashTable){
     if (hashTable[key] == 1)
     newArray.push(key)
   }
   
   let nArray = []
   len = newArray.length
   for (let i = 0; i < len; i++ ){
   nArray.push(parseInt(newArray[i]))
   }
   return nArray
}

console.log(JSON.stringify(notInBoth([1,2,3,4,3], [2,3,5,7]))===JSON.stringify([1,4,5,7]));
console.log(JSON.stringify(notInBoth([1,2,3,4,5], [2,3,5,7]))===JSON.stringify([1,4,7]));
console.log(JSON.stringify(notInBoth(["hi","hello","who"], ["hello","who","hi"]))===JSON.stringify([]));


console.log('---------------------------------------18');

//18. Write a method that returns the sum of digit passed into argument.
// sumOfDigits(123) => 6;
// sumOfDigits(111) => 3;
// sumOfDigits(900) => 9;

function sumOfDigits(num) {
    //Enter Code Here
    let sum = 0
    newNumber = num.toString()
    let len = newNumber.length
    
    for (let i = 0; i < len; i++){
      sum += parseInt(newNumber[i])
    }
    return sum
}

console.log(sumOfDigits(1234) === 10);
console.log(sumOfDigits(900) === 9);
console.log(sumOfDigits(54321) === 15);

console.log('---------------------------------------19');

// 19.Write a method that returns the greatest common divisor of two numbers
function greatestDivisor(argument1, argument2) {
    //Enter code here
    
    let greatestDivisor = 0 
    let result = 0
    if  (argument2 > argument1){
        result = argument2 % argument1
    if  (result == 0)
      greatestDivisor = argument1
    else
    greatestDivisor = result
    }
    
    if  (argument2 < argument1){
        result = argument1 % argument2
    if  (result == 0)
      greatestDivisor = argument2
    else
    greatestDivisor = result
    }
    return greatestDivisor
}

console.log(greatestDivisor(18, 12) === 6);
console.log(greatestDivisor(24, 48) === 24);
console.log(greatestDivisor(100, 250) === 50);

console.log('---------------------------------------20');
//20. Return an array of integers from 1 to n, except for each multiple of 3 replace the integer with "fizz", for each multiple of 5 replace the integer with "buzz", and for each multiple of both 3 and 5, replace the integer with "fizzbuzz".

function fizzbuzz(n) {
    //Enter Code here
    let array = []
    for (let i = 1; i <= n; i++){
    if (i % 3 !=  0 && i % 5 != 0)
      array.push(i)
    if (i % 3 == 0 && i % 5 != 0)
      array.push("fizz")
    if (i % 3 != 0 && i % 5 == 0 )
      array.push("buzz")
    if (i % 3 == 0 && i % 5 == 0 )
      array.push("fizzbuzz")
    }
    return array
}

console.log(
	JSON.stringify(fizzbuzz(15)) ===
		JSON.stringify([
			1,
			2,
			'fizz',
			4,
			'buzz',
			'fizz',
			7,
			8,
			'fizz',
			'buzz',
			11,
			'fizz',
			13,
			14,
			'fizzbuzz',
		])
);
console.log(
	JSON.stringify(fizzbuzz(35)) ===
		JSON.stringify([
			1,
			2,
			'fizz',
			4,
			'buzz',
			'fizz',
			7,
			8,
			'fizz',
			'buzz',
			11,
			'fizz',
			13,
			14,
			'fizzbuzz',
			16,
			17,
			'fizz',
			19,
			'buzz',
			'fizz',
			22,
			23,
			'fizz',
			'buzz',
			26,
			'fizz',
			28,
			29,
			'fizzbuzz',
			31,
			32,
			'fizz',
			34,
			'buzz',
		])
);
console.log(
	JSON.stringify(fizzbuzz(10)) ===
		JSON.stringify([1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz'])
);