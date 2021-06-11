const myStates = [
    "Andhra pradesh",
     "Maharastra",
      "TamilNadu",
      "Karnataka",
      1998,
      "Telengana",
      "kerala",
      "Bihar"
    ]

//ForEach method 
//We don't need any increment any condition to iterarte over loop no need of index

myStates.forEach((eachState)=>(console.log(eachState)))

//Foreach method with conditions

myStates.forEach((eachSate) => {
    if (typeof eachSate != "number") {
        console.log(eachSate)

    }
})


const names =[
    "Youtube",
    "Facebook",
    "Instagram",
    "Linkedin",
    "Amazon"
]

//for of 
// this loop is use for array or list 
console.log("Printing array items using for of loop")
for (const eachItem of names){
    console.log(eachItem)
}


//for in loop
//this loop is use for objects

console.log|("printing objects in console using for in")

const symbols ={
    yt:"Youtube",
    fb:"facebook",
    in:"Linkedin",
    ERUPS:"Empowering rural people with softskills",
    insta:"Instagram"
}

for (const eachItem in symbols){
    console.log(`${eachItem}:${symbols[eachItem]}`)
}
//Here we are priniting the key and values pairs of an object 