var number =  document.getElementsByClassName("counter");
var instagram = document.getElementsByClassName("description");

let count=0;
setInterval(() => {
    if (count < 1000){
        count++;
        number[0].innerHTML=count;
    }
    else{
        instagram[0].innerHTML="Followers in instagram"
    }
},1);