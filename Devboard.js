document.getElementById("theme-btn").addEventListener("click",function getColours(){
   let Symbols = "0123456789ABCDEF";
   color = "#"
   for (let i = 0;i < 6;i++){
    color = color + Symbols[Math.floor(Math.random()*16)];
   }
   document.body.style.background = color;
   document.getElementById("theme-btn").innerHTML = color;
})


const checkboxCount = document.getElementById("checkbox-count");
const taskAssignedCount = document.getElementById("task-assigned-count");
const clearHistoryButton = document.getElementById("clear-history-button");
const taskCompletedButton = document.querySelectorAll(".task-completed-button");
const mainRightBottomContainer = document.getElementById("main-right-bottom-container");
const todayDate = document.getElementById("today-date");

let currentDate = new Date().toLocaleDateString("en-US", { weekday: 'short', month: 'short', day: '2-digit', year: 'numeric' });
todayDate.innerText = currentDate;
let taskAssignedCountValue = 6;    
let checkboxCountValue = 23;


for(let i = 0 ; i < taskCompletedButton.length ; i++){
    taskCompletedButton[i].addEventListener("click",function(event){
        alert("Board updated Successfully")
        event.target.classList.add("disabled-button");
        event.target.setAttribute("disabled",true);
        
        taskAssignedCountValue = taskAssignedCountValue-1;
        taskAssignedCount.innerText = taskAssignedCountValue;
        
        checkboxCountValue = checkboxCountValue+1;
        checkboxCount.innerText = checkboxCountValue;

        let taskCompletedItemName = event.target.parentNode.childNodes[1].innerText
        let currentTime = new Date().toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });

        let div = document.createElement("div");
        div.innerHTML=`
        <p>You have Complete The Task ${taskCompletedItemName} at ${currentTime}</p>
        `;
        div.classList.add("history-box")
        mainRightBottomContainer.appendChild(div);
        
        if(checkboxCountValue > 28){
            alert("congrates!!! You have completed all the current task")
        }
    })
}

clearHistoryButton.addEventListener("click",function(){
    mainRightBottomContainer.innerHTML = ""
})

// done js