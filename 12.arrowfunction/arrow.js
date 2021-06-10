//in general function are written in variable function normal function like

function addNumber(num1,num2){
    return num1+num2;
}
console.log(addNumber(2,3))

//Or we can also write this function as a variable function

var subNumber = function(num1,num2){
    return num2 - num1
}
console.log(subNumber(3,4))

//Coming to arrrow functions we write it as using => symboles

var multiNumber = (num1,num2) =>{
    return num2 * num1;
} 
console.log(multiNumber(5,6))

//Like this we write arrow functions 
//Mostly we use arrow functions for call backs

//CallBacks

// () => {}  this is a call back
var multiNumber = (num1,num2) =>{
    return num2 * num1;
} 
console.log(multiNumber(5,6))
//This is a simple call back function
//We can also write this like this

var additon = (num1,num2) => num1 + num2
console.log(additon(10,20))

//important point when ever you are returning something in a call back use  {} brackes 
//If not using return then () circle braces

var listNumber = [1,2,3,4,5,6];
var result = listNumber.map((each)=>(each*2));
console.log(result)

