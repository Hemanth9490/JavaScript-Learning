//ARRAY
//OBJECTS
//LOOPS
//ALL these three concepts are very iportant in these days because everything now a days are dealing with these concepts from calling APS in web development to databases every thing done with these concepts 

//Loop througth array is very import to get result btter in easy way

//ARRAY

//Array is a collection of objects 

var names = ["Hemanth","Sekhar","Sujatha"]

//We can also declare array with like this

var country = new Array ("India","Srilanka","Russia")
console.log(country)
//Access values in array with index
console.log(names[2])

//We have so many methods to array with that we can implement so othet functions and get results

//Replacing the values in array

country[0] = "America"

console.log(country[0])

country.pop()
///this pop method removes the last element in the array 

console.log(country.indexOf("America"))

//it gives the index value of the element so now you can delete the element directly with the index value

console.log(country.indexOf("pakisthan"))
//We don'thave paksithan in the arry so it gives us -1 that means the element is not in the array


//Converting a string into array

var string = "Hemanth";

console.log(Array.from(string))

//It gives us an array ["H","e","m","a","n","t","h"]




//fill methods

var testArray =[2,4,6,1,3,5,7,0];
//fill method is used to fill the elements with a string or a number what ever the value

// console.log(testArray.fill("H",2,5))

//Basic structure of fill is fill(replaceValue,startIndex,endIndex)

//filter method
//Filter is used in so many cases 
//If you want to remove an item in a list without knoing the imdex value
//When ever we use filter it gives new array 
console.log(testArray)
console.log(testArray.filter((num)=>(num !=5)))

//this gives us an array and it doesn't contains 5 as a element in the array
//We can aslo filter less than 5 or anthing based on the conditon

console.log(testArray.filter((num)=>(num%2==0)))

//slice method
    
var admins = ["a","b","c","d","e"]

console.log(admins.slice(2,4))
//slice method used to split the arry or take a part of array like that we use slice

//Where as splice is different 
// splice(starIndex,count,"ReplaceValue")
var range = [1,2,3,4,5,6,7,8]

range.splice(1,3,"0","-2");
console.log(range)