

                // variables

// const accountId = 1256
// let accountEmail = "Akshay@google"
// var accountPassword = "1256"
// accountCity = "satara"


// always use const or let 


// console.log(accountCity)
// console.table([accountId, accountEmail, accountPassword, accountCity])


            // Datatypes


    // peimitive data types

// number        
// bigInt     big numbers
// string     ""
// boolean    true/false
// null         use for empty value
// undefined  
// symbol        use foe uniqueness 


// object

// console.log(typeof "undefined") // undefined
// console.log(typeof "null") // object


                    // datatype conversion


// let score = "33"

// console.log(typeof score);

// let valueInNumber = Number(score);

// console.log(typeof valueInNumber);

// e.g -:

//    "33"  =  33
//    "33abc" = NaN
//    null = 0
//    undefined = NaN
//    true = 1 false = 0


// let isLoggedIn = 1

// let boolean = Boolean(isLoggedIn);

// 1 = true    0 = false
// "" = false  "Akshay" = true


            // comparision of data type

// == this checks only value 
// === this checks value as well as data type

                // Datatype summary // *IMP

// data types are categarised based on how they store in memory and how you can access then                

// primitive

// string, Number, Boolean, Null, Undefined, BigInt, Symbol    
// this are call by value, when you changed the value inside these data types 
// the actual change is happened in its copied version

// Reference(non primitive)

// Array, Objects, Function

// const heros = ["shaktiman", "juniorG", "Hatim"];

// let obj = {
//     name: "Akshay",
//     age: 24,
// }

// const myFunction = function(){
//     console.log("Hello world");
// }

// Js is a dynamically typed language -> 
//  you not write the type of variable while declaring it.


                    // Stack and Heap memory

//stack (primitive),  Heap (Non-primitive)

// in stack (primitive) when you create duplicate of variable and change the value in the
// duplicate variable the change is happend in duplicate variable not original variable

// but in Heap the original variable is changed


                    // String 

// const name = "Akshay"
// const age = 24
// dont use + for join two strings instead use backtics
// `Hello my name is ${name} and my age is ${age}`

// another method of writing string
// const gameName = new String('Bgmi')

  // String Methods

// const name = "Akshay"

// console.log(name.length)


// if(name.includes('k')){
//     console.log(true)
// }

// .slice -: used to cut the string according to input   name.slice(1, 4) => ksh

// .trim   -: remove black places     

// .replace -: name.replace("k", "p") => Apshay   replace all -: replace all words in string

// toUpperCase   , toLowerCase    ,   []  , 

// indexOf -: find position of word in string



                            // Number and math

const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);    // number to string
// console.log(balance.toFixed(1));           // used to decide how many numbers 
                                              // will be there after decimal

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));      // to decide how many number are there

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));   // convert to readable number


        // Maths


// console.log(Math);
// console.log(Math.abs(-4));   // used to convert negative value to positive
// console.log(Math.round(4.6));  // round of the number => 5
// console.log(Math.ceil(4.2));   // round of number with higher value => 5
// console.log(Math.floor(4.9));  // round of number with lower value => 4
// console.log(Math.min(4, 3, 6, 8));  // to find min number in array
// console.log(Math.max(4, 3, 6, 8));  // max nuber

console.log(Math.random());      // gives  random number between 0 and 1
console.log((Math.random()*10) + 1);  // gives number between 1 and 10
console.log(Math.floor(Math.random()*10) + 1); // gives number bet 1 and 10 without decimal

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min )  // number bet 10 & 20



                        // Date and time


// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);                  // Object

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})
