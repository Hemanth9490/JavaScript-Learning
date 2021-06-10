
//Scope chaining

//smaller execution context have access the scope in larger execution context

//But larger execution context does'nt have the access in smaller execution context


var myName = "Hemanth"

console.log(myName,"line number 46");

function showName(){
    var meName ="Sujatha";
    console.log(myName, "Line number 49");
    console.log(meName,"lower scope line number 51")
}

showName()
console.log(myName, "Line number 55")
console.log(meName, "Line number 56") //This meName is not avaible in this scope its avaible in children scope so we can't access the children scope


//this Key word
//VERY IMPORTANT TOPIC ths

