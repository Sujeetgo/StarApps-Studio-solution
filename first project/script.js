let blueUmb = document.getElementById("blue-umb");

const buttonBlue = document.getElementById("blue");
const buttonPink = document.getElementById("pink");
const buttonYellow = document.getElementById("yello");

buttonPink.addEventListener("click", ()=>{
    blueUmb.src = "Pink umbrella.png";
})

buttonBlue.addEventListener("click", ()=>{
    blueUmb.src = "Blue umbrella.png"; 
})
buttonYellow.addEventListener("click", ()=>{
    blueUmb.src = "Yello umbrella.png"; 
})
