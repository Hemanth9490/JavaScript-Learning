//For all regular function calls, this points to window object 

console.log(this)
//Above this object refers to empty object

//But if you run the above code in browser this refers window object 

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
        console.log(this)
        //Here this referes same object user1
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
user1.getCourseCount()

//but in regular cunction this refere the window 
function sayHello(){
    console.log(this)
}
sayHello()
//The above code is a regular function and regular function call

//But we are taking about object functions

//In general in all regular function this refer to golbal that means window

//In object functions this refers to object 
//We have a special case like in the object function we have regular function then this in regular function referes to window 
//Example

var object ={
    saybye:function (){
        console.log("line 52:",this)
        function saygoodnight (){
            console.log("line 54",this)
        }
        saygoodnight()
    }
}

object.saybye()