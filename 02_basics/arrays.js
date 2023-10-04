                            // array


const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)      // add element in last
// myArr.push(7)
// myArr.pop()        // remove last element 

// myArr.unshift(9)   // add element at first position
// myArr.shift()      // remove first element

// console.log(myArr.includes(9));     // checks this element is present in an array
// console.log(myArr.indexOf(3));      // position of element

// const newArr = myArr.join()         // used to convert array into string

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);    

const myn1 = myArr.slice(1, 3)       // gives element bet 1 and 2 
                                    // original array remains same

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)     // gives elements bet 1 and 3
console.log("C ", myArr);           // original array has all elements except 1,2,3
console.log(myn2);



//..............//************************************************//.................//


const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)          // this will add dc_heros as 4th element in 1st array 

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)    // this will add dc_heros all elements 1 by 1 in 
// console.log(allHeros);                                   1st array and create a new array

const all_new_heros = [...marvel_heros, ...dc_heros]  // spread oprator -: same as concat always prefer this 

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)  // if multipal arrays are present inside array 
console.log(real_another_array);                         //  this will create single array



console.log(Array.isArray("Hitesh"))       // tells whether this array present or not
console.log(Array.from("Hitesh"))         // create array from given input
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));   // this crates array from multipal variables



                                // Object

// singleton
// Object.create

// const newOb = new Object()          -: this is singleton  (interview imp)
// object literals

const mySym = Symbol("key1")           


const JsUser = {                           // -: this is non singleton 
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",                      // use brackets for symbol
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)       
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)                    you cannot change elements from objecct
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    // console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    // console.log(`Hello JS user, ${this.name}`);
}

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());




// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]


