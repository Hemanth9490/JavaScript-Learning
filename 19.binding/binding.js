const hemanth = {
    firstName :"Hemanth",
    lastName : "Katta",
    role : "User",
    courseCount : 4,
    getInfo : function(){
        console.log(`
        First name is ${this.firstName}
        Last name is ${this.lastName}
        Role is ${this.role}
        Course Count is ${this.courseCount}
        `)
    }
}
//We will get prototype methods in console when we run this in console for the whole object the propto type is ther and aslso we have anothert proto type for methods whichare in objects 
//In that method prototype we have some methods like bind,call caller


const dj ={
    firstName:"Rock",
    lastName :"DJ",
    courseCount : 3,
    role:"subAdmin"
}

 

//In the above we did\t get output for dj.getinfo() 
//We need to copy the getinfo method using bind

var djinfo = hemanth.getInfo.bind(dj)
djinfo()