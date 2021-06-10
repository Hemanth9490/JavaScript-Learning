//undefined
//null
//" "
//NaN

//All above values are Falsy values

var user =null;

if(user){
    console.log("condition is true")
}
//In the above example the statements execute only for truth values 
//Not execute with falsy values

//  == lose checking
// === strict checking

//example

var number = 2;

if (number == "2"){
    console.log("yes it is string 2")
}

if (number === 2){
    console.log("yes its true strict number")
}