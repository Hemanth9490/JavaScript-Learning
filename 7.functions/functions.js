//In general we use functions for repeated of code reduce the code 

function sayHello(){
    var fullName = "Hemanth Katta";
    var wishes = "welcome";
    console.log(`${wishes} ${fullName}`)
}
//This is calling a function 
sayHello();    

//this is a referiing a function
sayHello;


//passing the values in the functions
//in this below example we are passing the values in the functions as a arguments
function hello(name){
    var fullName = `${name} Katta`;
    var wishes = "welcome";
    console.log(`${wishes} ${fullName}`)
}

hello("Hemanth")
hello("Sujatha")


//returning the values from the functions
function greetings(name){
   return `Hello ${name}, Welcome to india`
}

var result = greetings("Hemanth")
console.log(result)

//In this examples we are just returning the exact vales from the function
//Storing the retun value in the result value
//And giving to the console to print the value


//Assigning the function in a variable

var greetings =function (name){
    return `Hello ${name}, Welcome to india`
}

var result = greetings("Somasekhar")
console.log(result)