//Stores text a and button in variable
const textElement = document.querySelector("#text");
const changeColorButton = document.querySelector("#changeColorButton")

function changeTextColor(){
    const colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink", "black"];
    changeColorButton.addEventListener("click",() => {
        const randomColor = colors[Math.floor(Math.random()* colors.length)];
        textElement.style.color = randomColor;
});
}
changeTextColor();