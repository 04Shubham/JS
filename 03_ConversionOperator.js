let score = ""

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber)

// Notes:-
//"34" => 34 convert string into number
//"34abc" => NaN (not a number)
// true => 1 ; false => 0
// null => 0
// undefine => undefine
// "" => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn);
//console.log(booleanIsLoggedIn);

// Notes :- conversion into boolean form
// 1 => true; 0 => flase
// "" => fasle
// "Shubham" => true

let SomeNumber = 34

let stringNumber = String(SomeNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);


// *************** Operations *****************

let value = 3 
let negValue = -value
// console.log(negValue);

let str1 = 5
let str2 = 6
let str3 = str1 + str2
// console.log(str3)

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// *** This type of operator not good for company . ***
//console.log(+true);  // true => true // +true => 1 // true+ => error
//console.log(+""); // +"" => 0 

// ** not use due not clear readable **
//let num1, num2, num3
//num1= num2=num3 = 2 + 2

let gameCounter = 100
// gameCounter++;
// console.log(gameCounter);

// *****  Increment *****
//Postfix
let x=3;
const y= x++;
console.log(`x:${x} , y:${y}`)
//Prefix
let a=3;
const b = ++a;
console.log(`a:${a}, b:${b}`)
