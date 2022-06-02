1)What are promises and why do we need them?
ans:-A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to
 associate handlers with an asynchronous action's eventual success value or failure reason. This lets 
 asynchronous methods return values like synchronous methods: instead of immediately returning the final 
 value, the asynchronous method returns a promise to supply the value at some point in the future.

 
pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.



//***************************************************************************************************************** */



2)What is the purpose of async/await keywords?
ans:-An async function is a function declared with the async keyword, and the await keyword is permitted 
within it. The async and await keywords enable asynchronous, promise-based behavior to be written in a 
cleaner style, avoiding the need to explicitly configure promise chains.



//********************************************************************************************************************* */




3)What is hoisting?
ans:-Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top 
of their scope before code execution. Remember that JavaScript only hoists declarations, not initialisation. 
Let's take a simple example of variable hoisting,

console.log(message); 
var message = 'The variable Has been hoisted';

The above code looks like as below to the interpreter,

var message;
console.log(message);
message = 'The variable Has been hoisted';




//********************************************************************************************************************* */





4)What is the DOM?
ans:-The Document Object Model (DOM) is the data representation of the objects that comprise the structure and
 content of a document on the web. The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that 
programs can change the document structure, style, and content. The DOM represents the document as nodes and objects;
 that way, programming languages can interact with the page.




 //******************************************************************************************************************* */





 5)Difference between undefined vs not defined vs NaN?
 ans:-Undefined
 undefined is a global variable that JavaScript creates at run time. JavaScript assigns undefined to any variable 
 that has been declared but not initialized or defined. In other words, in a case where no value has been explicitly
  assigned to the variable, JavaScript calls it undefined.
 null
 It is one of JavaScript’s primitive values and is treated as falsy for boolean operations.null is an empty or 
 non-existent value and null must be assigned. We use null when we want to explicitly declare that a variable is empty.
 not defined
 A not defined is a variable that is not declared at a given point of time with declaration keyword like
  var, let, or const.
 


  //**************************************************************************************************************** */





  6)How many operators do we have in JS ?
  ans:-
  1.Arithmetic Operators
  2.Comparison Operators
  3.Logical Operators
  4.Assignment Operators
  5.Conditional Operators
  6.Ternary Operator



  //************************************************************************************************************** */




  7)What are pure functions?
  ans:-Pure Function is a function (a block of code ) that always returns the same result if the same arguments
   are passed. It does not depend on any state, or data change during a program’s execution rather it only depends
    on its input arguments. Also a pure function does not produce any observable side effects such as network requests or data mutation etc.
  
  function calculateGST( productPrice ) {
      return productPrice * 0.05;
  }



  //************************************************************************************************************** */





  8)What is callback hell?
  ans:-Callback Hell is an anti-pattern with multiple nested callbacks which makes code hard to read and debug 
  when dealing with asynchronous logic. The callback hell looks like below,

  async1(function(){
      async2(function(){
          async3(function(){
              async4(function(){
                  ....
              });
          });
      });
  });
  



  //*************************************************************************************************************** */





  
  9)What is promise chaining?
  ans:-The process of executing a sequence of asynchronous tasks one after another using promises 
  is known as Promise chaining. 

  new Promise(function(resolve, reject) {
  
    setTimeout(() => resolve(1), 1000);
  
  }).then(function(result) {
  
    console.log(result); 
    return result * 2;
  
  }).then(function(result) {
  
    console.log(result); 
    return result * 3;
  
  }).then(function(result) {
  
    console.log(result); 
    return result * 4;
  
  });




  //************************************************************************************************************** */




  10)What are arrow functions?
  ans:-Arrow Functions — also called “fat arrow” functions, are relatively a new way of writing concise
   functions in JavaScript. They have been introduced by the ECMAScript 6 specifications and since then
    become the most popular ES6 feature. Arrow functions allow us to use the fat arrow => operator to quickly 
    define JavaScript functions, with or without parameters. We are able to omit the curly braces and the 
    function and return keywords.
  
  let x = function(x, y) {
     return x * y;
  }
  can be written as
  
  let x = (x, y) => x * y;
  


  //******************************************************************************************************************** */


  

  11)Give an example of async/await?
  ans:-function resolveAfter2Seconds() 
  return new Promise(resolve =>
  {  
   setTimeout(() => { 
  resolve('resolved')
  }, 2000);
   });
 }
 async function asyncCall() {
  console.log('calling');
   const result = await resolveAfter2Seconds();
 console.log(result);
 // expected output: "resolved"
 
  
  






