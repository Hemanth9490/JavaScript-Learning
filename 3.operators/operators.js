//Operators like + - / % *  > < >= <= ! etc....

var sellingPrice = 199;
var listingPrice =799;

var discountPercent = ((listingPrice - sellingPrice) / listingPrice) * 100;

console.log(`Discount price : ${discountPercent}`)
//This console gives os float value but in real world we have percentage in number

//To convert it we have Math package using round method

var displayDiscountPercent = Math.round(discountPercent)
console.log(`${displayDiscountPercent}% off`)

//this gives us exact values to how to get values in number using math.round funtion 

//Like that we have alot og function in our javasscript libary


//To get what datatype usse typeof

var result = sellingPrice < listingPrice;

console.log(result)
// this gives us what the values like true or false

console.log(typeof(result))
//This gives the what type of value in rsult like number,booleen, etc...


//using paranthasis
//a * b + c + d * v / m this is not good declaration
//To get accurate answers paranthsis is used
//(a * b) + c + ((d * v) / m )




