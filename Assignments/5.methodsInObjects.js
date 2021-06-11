
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


//We can aslo get all info in the user1 using methods 
user1.buyCourse("React" )
user1.buyCourse("Angular" )
console.log(user1.getInfo())