// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Bravo 2022"
console.log(cohort.split(" "))

// a) Your answer:  This will result in breaking the string into two: "Bravo" and "2022"
// b) Verify and explain: My understanding of the function .split, is that it will divide a string based on a pattern. If pattern is not specified, it will split the strings into words. Instead it returned  all letters in its own string. I needs a space in between the quotation marks to split into words.


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: Hello, LEARN Student
// b) Verify and explain: Returned as "undefined". No value was assigned to name.


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)

// console.log(multBy2)

// a) Your answer: 8, 10, 12, 14, 16
// b) Verify and explain: Returns : The HOF .map returned value of the array multiplied by 2.
//


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: 11, 13, 15
// b) Verify and explain: The connector on the modulo function filtered out the even numbers.


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer:  JavaScript, Ruby
// b) Verify and explain:  Returns: Javascript only. The index [0] is only pointing to languages and not the others.


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Bravo",
    this.year = 2022
  }
}
var learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer: student: George, cohort: Bravo, year 2022
// b) Verify and explain: I missed the name of the class, the quatation marks on value with strings.
