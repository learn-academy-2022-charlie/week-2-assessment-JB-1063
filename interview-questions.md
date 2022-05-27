# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

  Your answer: A parammeter is a variable  defined when we declare a function. An argument is a the value used in a function for execution. Like if you are in a formal dinner, the parameter will say "this seat is reserved for Mr. A". And when the actual Mr. A arrives, he becomes the actual value occupying the seat - the argument.

  Researched answer: A parameter is a placeholder that tells function that an input is expected. The argument is the value that goes into the parameter and used by the function to execute and get result. If the parameter is the placeholder, the argument is the value that will occupy the space identified by the placeholder.



2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

  Your answer: The predefined parameters in the method .map(0 are the element, index, and the array)

  Researched answer: The .map() method has the following parameters: callbackFn, element, index, array and an optional thisarg. The callbackFn is operations needed to be done in the function for every element of the array when the map function is called. The callbackFn is not called for missing elements whose indexes were deleted or never ben established. An element is the specific value that occupies a specificplace in the array that is pointed to by its index. The array is the name for the whole collection of elements.


3. What is the difference between map and filter?

  Your answer: The .map changes the value of each element of the array
  and returns an array of the same length. The .filter will screen the array and only include in resulting array the elements that meets the criteria. The resulting array may be shorter in length than the original array.

  Researched answer: The map and filter are both High Order Functions but acts in a different way. The map acts on each elements of the array and applies the function defined and returns a new value back to the array as a result. The filter goes through each element of the array and takes only the elements the meet the condition defined in the filter function. The filter may return a smaller number of elements than the original array as it weeds out the elements that did not meet the condition set by the filter function.



4. What is the difference between a function and a method?

  Your answer: A function is a code that is called by name to operate on and return data. A method is also a code called by name to operate on a data but is contained within a class.

  Researched answer: A function is a code that perform a designed operation. A function is directly called by its name. It is reusable and invoked by the () operator.
  A method on the otherhand is an object property that can have function. To call the method you need the object and the method name with the use of a square bracket or a dot notation. Method have built in codes making it shorter than having to write the operations through a function. The map and filter are examples of a method.



5. What is object destructuring?

  Your answer: Object destructuring is a way of extracting values from an object and putting them in a variable. This is specially helpfull in getting values nested in arrays.

  Researched answer: Object destructuring is like creating a shortcut to access a value nested in the layers of inheritance. It is like a map through the various layers of inheritance so you will only have to set it one time and just invoke that map/shortcut everytime you need access to specific element. 



6. STRETCH: What is hoisting in JavaScript?

  Your answer: Hoisting is when you define variables or function before the body of the code but are not given initial values.
  You are just declaring them before hand.
  Researched answer:




## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Class Inheritance: In class inheritance you are able to pass properties of the parent class to children class like an inheritance. For instance if the parent class have 4 wheels, it is passed on to the children class unless a change will be specified in any of the children. It can be passed down to the children but children can not pass up to the parents.

2. React: React allows the large number of applications that can change data without reloading the page. This makes React to be fast, scalable and simple. It is easier to add smaller pieces of code and on the other hand make the application take on bigger number of codes and not disturb the whole application.

3. React state: State is a built-in object in react. It holds data or information about the component. It allows components to create and manage their own data.

4. React lifecycle methods: The React lifecyles are usually grouped in three main phases: mounting; updating; and unmounting. When a unit is put into the DOM it is in the mounting phase. Updating phase is when it is already in the DOM and adjusting  to update the component. The Unmounting phase is when the component is removed from the DOM. Each of these 3 phases will usually have a render phase and a commit phase. There are also methods that are unique to each phase as different set of operations are needed under each phase. When a component is being created and installed to a DOM during the mounting phase it will go through a constructor, static getDeriveStateFromProps, render and componentDidMount. Another set of methods under Updating phase will come next. The last method will be the componentWilUnmount during the unmounting phase.

5. DOM: Document Object Model is a representation of the HTML elements in a webpage or app. It shows the webpage like a tree where each set of code added is shown as a node looking like smaller parts of the tree.
