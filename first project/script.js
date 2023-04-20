let blueUmb = document.getElementById("blue-umb");

const buttonBlue = document.getElementById("blue");
const buttonPink = document.getElementById("pink");
const buttonYellow = document.getElementById("yello");

let uploadIcon = document.getElementById("ico");
const formEl = document.querySelector("form");

const uploadLogo = document.getElementById("upload-logo");
buttonPink.addEventListener("click", ()=>{
    blueUmb.src = "Pink umbrella.png";
})

buttonBlue.addEventListener("click", ()=>{
    blueUmb.src = "Blue umbrella.png"; 
})
buttonYellow.addEventListener("click", ()=>{
    blueUmb.src = "Yello umbrella.png"; 
})

uploadLogo.addEventListener("click", (e)=>{
    e.preventDefault();
    uploadIcon.src = "loader_icon.svg";
    uploadLogo.style.height ="35px";
    uploadIcon.classList.add('rotating');
})
