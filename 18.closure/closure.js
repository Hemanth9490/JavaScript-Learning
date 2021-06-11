function init(){
    var firstName="HEmanth";
    function sayFirstName (){
        console.log(this.firstName)
    }
    sayFirstName()
}
firstName = "somaa"
init()

//In above example this refer to golbal contrext thats why the cobsole logged in with


//clousure

function addition(x){
    return function(y){
        return x+y
    }
}
var add = addition(2)

console.log(add(2))

console.log(addition(5)(4))
//curring ()()()
//In javascript the memory of that functions never goes it always till there to serve the nexrt vlaues