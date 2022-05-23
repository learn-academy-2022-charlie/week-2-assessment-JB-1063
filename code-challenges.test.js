// ASSESSMENT 2: Coding Practical Questions with Jest

const { array } = require("yargs")

// const { exportAllDeclaration } = require("@babel/types")
// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.

// a) Create a test with expect statements for each of the variables provided.

// const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]


// b) Create the function that makes the test pass.



// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.
//  create a function takes in a number as an argument
//  using modolo function to test if number is divisible by 3

describe("divByThree"), () => {
    it("returns if a number is divisible by three", () => {
        expect(divByThree(num1)).toEqual("divisible by three")
        expect(divByThree(num2)).toEqual("divisible by three")
        expect(divByThree(num3)).toEqual("not divisible by three")

    })
}

// a) Create a test with expect statements for each of the variables provided.

const num1 = 15
// Expected output: "15 is divisible by three"
const num2 = 0
// Expected output: "0 is divisible by three"
const num3 = -7
// Expected output: "-7 is not divisible by three"

// First test failed


// b) Create the function that makes the test pass.
// pseudo code: create a function called divByThree
// using the modulo function create test if number is divisible by 3
// if value is true, return the number with string "is divisible by three"
// if value returned is false, return the number with the string " is not divisible by three"

const divByThree = () => {
    if(divByThree % 3 === 0) {
        return `${divByThree()} is divisible by three`
  }  else {
        return `${divByThree()} is not divisible by three}`
    }
}
console.log(divByThree(num1))
console.log(divByThree(num2))
console.log(divByThree(num3))


// After creating the function the yarn jest still returned as failed and was stuck on this.

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.
// Pseudo code
// funcion named capitalize
// input ===> an array of words in a string
// output ===> an array of the words capitalized

describe("capitalWords"), () => {
    let randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
    let randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
    let result1 = ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]   
    let results2 = ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]
    it("capitalizes the values of the arrays", () {
        expect(capitalWords(randomnouns1)).toEqual(results1)
        expect(capitalWords(randomnouns2)).toEqual(results2)        
    })
}

// Test failed
// a) Create a test with expect statements for each of the variables provided.


const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

// b) Create the function that makes the test pass.

// create a function called capitalWords
// with an array as parameter
// declare capWords array as empty
// use for loops iteration to go into each word of the array
//use charAt(0) and .toUppercase to capitalize the first letter of
//of each value of each string array and add the rest of the letters ///of the string with the .slice
// console.log to input the capitalized word in the capWord array
// after the iteration, use return capWord to output the capWord 
//array with capitalized first letter


const capitalWords = (array) => {
    let capWords = []
    for (var i = 0; i < array.length; i++ {
     array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1)
     console.log(capWords)
}
    return capWords
console.log(capitalWords(randomNouns1))
console.log(capitalWords(randomNouns2))
console.log(capitalWords(randomNouns3))
}

//Test failed and got stuck again here.

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.
// Pseudo code: create a function called firstVowel 
// input ===> takes in a string
// output ===> the index of the first vowel
// a) Create a test with expect statements for each of the variables provided.

describe ("firstVowel", () => {
    it("returns the index of the first vowel of the string", () => {
        expect(vowelTester1("learn")).toEqual("1")
        expect(vowelTester2("academy")).toEqual("0")
        expect(vowelTester3("challenges")).toEqual("2")

    })
})

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2
//First test failed.
//create function using

// b) Create the function that makes the test pass.
// Pseudo code:
// create a function called firstVowel
// the function takes on a parameter composed of string
// use the search function to search for the first vowel
// used the return[i] to output the index of the vowel
// used console.log to invoke the function to get the index of the /////first vowel

function firstVowel(str)  {
    let test = vowelTest.search(/[a,e,i,o,u,A,E,I,O,U]/g)
    return [i]
}
    console.log(firstVowel(vowelTester1()))
    console.log(firstVowel(vowelTester2()))
    console.log(firstVowel(vowelTester3()))


//Yarn jest test failed again. Tried to very for spelling, misplaced punctuations or characters after the 3 failed tests. Tried to compare code with some of those discussed in class but still can not figure out the error.

























































































































































































































































































letters and the string.
const regex = /[a,e,i,o,u,A,E,I,O,U]/g;
    
const firstVowel = (array) => {
    return console.log(firstVowel(Voweltester1.search(regex)))
    return console.log(firstVowel(Voweltester2.search(regex)))
    return console.log(firstVowel(Voweltester3.search(regex)))
    }