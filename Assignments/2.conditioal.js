
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
