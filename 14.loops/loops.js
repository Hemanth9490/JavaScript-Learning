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

   
//Basic iteration on array using for loops
for (let index = 0; index < myStates.length;index++){
    if (typeof myStates[index] == "number"){
        continue
    }
    console.log(myStates[index])
}

//break 
//break statement is used to stop the loop if a particular condition meets

//continue
//This continue key word is used to skip a execution statement when a particular condition meets
//In the above example we are skippin consol.statement when number arrives 


//while loop


const myCountries = [
    "Andhra klmanopradesh",
     "Maharaklmanostra",
      "TamilklmanoNadu",
      "Karnaklmanotaka",
      1998,
      "Telenklmanogana",
      "keralklmanoa",
      "Biharklmano"
    ];

//In while loop we initial index first 

let index = 0;
while (index <myCountries.length){
    console.log(myCountries[index])
    index++
}

//simillar do while


let i = 0;
do{
    console.log(myCountries[i])
    i++
}while (i <myCountries.length)