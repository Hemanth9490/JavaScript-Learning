var temperature = 10;


//here we ccan check the temperature and then give the console according to it

if (temperature < 20){
    console.log(`tempeture is : ${temperature} so its cold outside`)
} 
//Above contition check if tempeture is below 20 console cold out side

temperature = 32;

if (temperature < 30 && temperature >20){
    console.log(`Tempeture is: ${temperature} so its modetate outside`)
}else{
    console.log(`Tempeture is ${temperature} so its too hot`)
}
//The conditional statement gives else block if doesn't true then it comes to else block

//We can also use if conditon in another else conditon we called nested if



//Using And operator we can check 2 or more conditon in a statement.
temperature = 39;

if (temperature < 30 && temperature >20){
    console.log(`Tempeture is: ${temperature} so its modetate outside`)
}else{
    if (temperature < 40 && temperature
        > 30){
            console.log(`Tempeture is ${temperature} so its too hot`)
        }
        else{
            console.log(`Tempeture is ${temperature} so its hot`)
        }
    
}

// like that we can give nested if conditions


//Similarlly OR operator

//Scenario is user need to login to the site he/ she can use login methods like google facebook or email
//Any one of is true we need to login them in the site

var email = true;
var google = false;
var facebook = true;

if (email){
    console.log("Login success")
}
if (google){
    console.log("Login success")
}
if (facebook){
    console.log("Login success")
}

//here above code user can get login if any of this vecome true

// we can also write this in another formate little bit easy 

if (email || google || facebook){
    console.log("User login Sucess")
}

//This is very simple as above 



//Another scenorie is show signout button when user authonticated and show sign in button when user not authonticated

var authorized =true;

if (authorized){
    console.log("Show signout button")
}else{
    console.log("show signin button")
}
//like this we can achive this sceniro

//simillary we can use ternary operator insead of if and else statement

authorized =false;

authorized ? console.log("Show signout button") : console.log("Show sign in button");

