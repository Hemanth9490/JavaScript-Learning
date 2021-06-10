

//scenario giving privalization that means access to particular user different
//For example prime user hav one bebifits and non prime havve anothet benifits 
//May be admin sub admin have differenet accesss

//Such scenario if and else statements work fine but if incresed in conditon its look like little complecated 
//To avoid this we can implement switch case

//users =users get content access
//admin = Admin get full access
//subadmin = Subadmmin fet design part access

//If any one is not there default conditoin will execute

var user = "asd"

switch (user) {
    case "admin":
        console.log("Admin get full access")
        break;
    case "users":
        console.log("users get content access")
        break;
    case "subadmin":
        console.log("subAdmin get design part access")
        break;

    default:
        console.log("Trail user")
        break;
}

//Here you need to use break statement in every case
//If we are not using brreak statemtn then every console statemetnt executes
