const courses = [
    {
        name:"React Js",
        price:"2.3"
    },
    {
        name:"Express Js",
        price:"5.3"
    },
    {
        name:"Mango DB",
        price:"3.3"
    },
    {
        name:"Node Js",
        price:"1.3"
    },
]

function generateList (){
    const ul = document.querySelector(".list-group");
    ul.innerHTML=""
    courses.forEach( (eachCourse) => {

        const li = document.createElement("li");
        li.classList.add("list-group-item");

        const courseName = document.createTextNode(eachCourse.name);
        li.appendChild(courseName);

        const span = document.createElement("span");
        span.classList.add("float-right");

        const price = document.createTextNode("$"+eachCourse.price);
        span.appendChild(price)

        li.appendChild(span)
        ul.appendChild(li)
        
    })
}
 
generateList()

const buttonIncrease = document.querySelector(".sort-increase");
buttonIncrease.addEventListener("click",() => {
    courses.sort((a,b)=>a.price - b.price)
    generateList()
})

const buttonDecrese = document.querySelector(".sort-decrese");
buttonDecrese.addEventListener("click",() => {
    courses.sort((a,b)=>b.price - a.price)
    generateList()
})
