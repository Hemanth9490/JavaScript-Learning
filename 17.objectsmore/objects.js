//using proto types og objects can give more instance 
//we don't need again and again creating all properties in a object 

var user = function (firstName,courseCount) {
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function () {
        console.log(`total course count is ${this.courseCount}`)
    }
}
//Creating a methods for the users without touching the real user object
user.prototype.getFirstName = function () {
    return this.firstName;
}
//In above part of code we generated a your own method using prototype


//Creating instance of object 
var hemanth = new user("Hemanth",5);
console.log(hemanth)
console.log(hemanth.getFirstName())



var sekhar = new user("Sekhar",2);
// console.log(sekhar)

//all our methods are injected in a prototype 
// for example
var array = [1,2,3]
//here some times we can ask the array find the lenght
// the array already having a varaibale or mrthod to store the lenght
//array.lenght