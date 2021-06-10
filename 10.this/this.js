
//Here this refer to empty scope 

//But in console in browser this gives global values window.
console.log(this)


function hello(){
    console.log(this)
}
hello()

//if you look in this example this refers to that scope and it shows some data in the console

//But previous doesn't diven anything to us