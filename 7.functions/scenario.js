//scenario giving privalization that means access to particular user different


//users =users get content access
//admin = Admin get full access
//subadmin = Subadmmin fet design part access

//If any one is not there default conditoin will execute

function getUserRoles(name,role){
    switch (role) {
        case "admin":
            return `${name} is ${role} can get full access`;
        case "subadmin":
            return `${name} is ${role} can get design part  access`;
        case "user":
            return `${name} is ${role} can get Content access`;
        default:
            return `${name} is  ${role} get trail access`;
    }
}

var result = getUserRoles("Hemanth","admin")
console.log(result)