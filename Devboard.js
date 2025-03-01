document.getElementById("theme-btn").addEventListener("click",function getColours(){
   let Symbols = "0123456789ABCDEF";
   color = "#"
   for (let i = 0;i < 6;i++){
    color = color + Symbols[Math.floor(Math.random()*16)];
   }
   document.body.style.background = color;
   document.getElementById("theme-btn").innerHTML = color;
})

function disableBtn() {
    document.getElementById("btn-complete").disabled = true;
}
function disableBtn1() {
    document.getElementById("btn-complete1").disabled = true;
}
function disableBtn2() {
    document.getElementById("btn-complete2").disabled = true;
}
function disableBtn3() {
    document.getElementById("btn-complete3").disabled = true;
}
function disableBtn4() {
    document.getElementById("btn-complete4").disabled = true;
}
function disableBtn5() {
    document.getElementById("btn-complete5").disabled = true;
}

// document.getElementById("btn-complete").addEventListener("click", function(){
   
// })

document.getElementById("btn-complete").addEventListener("click",function(){
    console.log("hello")
})
