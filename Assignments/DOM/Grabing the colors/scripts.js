






var red = document.querySelector(".red")
var cyan = document.querySelector(".cyan")
var violet = document.querySelector(".violet")
var pink = document.querySelector(".pink")
var orange = document.querySelector(".orange")

var center = document.querySelector(".center")

 
const getBgColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundImage;
}


const magicColor = (element,color) => {
    return element.addEventListener("mouseenter", () => {
        center.style.backgroundImage = color;
    });
    
};
magicColor(red,getBgColor(red))
magicColor(cyan,getBgColor(cyan))
magicColor(violet,getBgColor(violet))
magicColor(pink,getBgColor(pink))
magicColor(orange,getBgColor(orange))
