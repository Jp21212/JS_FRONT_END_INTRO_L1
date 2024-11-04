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

const pictureElement = document.getElementById("#toggle-image")
function changePicture(){
const images = [
   "https://www.pbs.org/wnet/nature/files/2014/10/Monkey-Main-1280x720.jpg"
   "https://media.npr.org/assets/img/2015/09/23/ap_836720500193-d90a20e2b8d735f74d436f36054eb3dc2bd96696.jpg?s=1100&c=85&f=jpeg"
   "https://i.natgeofe.com/n/82fddbcc-4cbb-4373-bf72-dbc30068be60/drill-monkey-01.jpg?w=2560&h=1920"
   "https://kidszoo.org/wp-content/uploads/2023/09/swamp-monkey_intern-alyssa-3-scaled.jpg"

];

let currentIndex = 0;

pictureElement.addEventListener("click", () =>{
    currentIndex = (currentIndex + 1) % images.length;
    pictureElement.src = images[currentIndex]
})
}
changePicture()
