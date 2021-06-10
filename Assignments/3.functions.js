//declaring functions

function hello(){
    console.log("Hello hemanth");
}

//calling a functions
hello()

//passing values in the functions

function sayHello(name){
    return `Hello ${name}`
}

console.log(sayHello("sekhar"))

//Functions as a variables 
//Assigning functions to the varabiles

var greetings = function (name){
    return `${name} Welcome to india`
}

var result = greetings("Sujatha")
console.log(result)

//Here in above example we are storing the return value in result var and then we are console the values