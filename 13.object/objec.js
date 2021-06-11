//In javascript object plays an important role we can say objects are backbone tojavascroipt

//API's are used in javascript almost every api'are in object form
//Need to learn objects methods properly before working with API's
//Objects are key value pair

var user = {
    firstName:"Hemanth",
    lastName:"Katta",
    role:"admin",
    phoneNumber:"9490403329",
    isLoggiedIn:true,
    courseList:[],
    buyCourse:function (courseName) {

    }
}
//This is basic object declaration
//Accessing objects
console.log(user.firstName)  //this is dot notation
//We can also access with 
console.log(user["lastName"])

//but most of the developers use dot notations
//we can update modify the objects
user.role="SubAdmin"
console.log(user.role)

//We can get entier object also
console.log(user)

//Not only log method we have we have so many methods table,error,lo etc...
console.table(user)



//Object part 2
//Adding methods in the object 

var user1 = {
    firstName:"Hemanth",
    lastName:"Katta",
    role:"admin",
    phoneNumber:"9490403329",
    isLoggiedIn:true,
    courseList:[],
    buyCourse:function (courseName) {
        this.courseList.push(courseName)
    },
    getCourseCount: function () {
        return `${this.firstName} is having total ${this.courseList.length} courses`
    },
    getInfo:function () {
        return `
        firstName : ${this.firstName}
        lastName : ${this.lastName}
        role : ${this.role}
        phoneNmber : ${this.phoneNumber}
        isLoggedIn : ${this.isLoggiedIn}
        courseList : ${this.courseList}
        `
    }
};

//buyCource Method 
//It takes a argument and add that argumrnt in course list 
//So to access tha course list you need to use this key word beacuse this refer user in above scenario
//so instead of user.courseList  we can use this.courseList
//buying a couse
console.log(user1.courseList)
user1.buyCourse("React js course")
user1.buyCourse("Angular course")
console.log(user1.courseList)

//Get the count of course in the couse list 
console.log(user1.getCourseCount())
 
//We can aslo get all info in the user1 using methods 

console.log(user1.getInfo())