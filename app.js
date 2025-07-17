const bells = new Audio("./sounds/bell.wav"); 
const startBtn = document.querySelector(".btn-start"); 
const resetBtn = document.querySelector(".btn-reset");
const pauseBtn = document.querySelector(".btn-pause");
const minuteDiv = document.querySelector(".minutes");
const secondDiv = document.querySelector(".seconds");
const sessionAmount = Number.parseInt(minuteDiv.textContent)
let totalSeconds = sessionAmount * 60;
const ceros = "00";
let myInterval; 
let state = true;
let pause = false;


const appTimer = () => {
  
    if(state) {
        state = false;
        resetBtn.setAttribute("style","visibility:visible !important");
        pauseBtn.setAttribute("style","visibility:visible !important");
    
        const updateSeconds = () => {

            totalSeconds--;
        
            let minutesLeft = Math.floor(totalSeconds/60);
            let secondsLeft = totalSeconds % 60;
        
            if(secondsLeft < 10) {
            secondDiv.textContent = "0" + secondsLeft;
            } else {
            secondDiv.textContent = secondsLeft;
            }
            minuteDiv.textContent = `${minutesLeft}`
        
            if(minutesLeft === 0 && secondsLeft === 0) {
            bells.play()
            clearInterval(myInterval);
            }
      }

      myInterval = setInterval(updateSeconds, 1000);
    } else {
      alert("Session has already started.");
    }
  }

  const resetTimer = () => {
    clearInterval(myInterval);
    state = true;
    minuteDiv.textContent = sessionAmount;
    secondDiv.textContent = ceros;
    totalSeconds = sessionAmount * 60;
    resetBtn.setAttribute("style","visibility:hidden !important");
    pauseBtn.setAttribute("style","visibility:hidden !important");
  }

  const pauseTimer = () => {
    clearInterval(myInterval);
    state=true;
  }

  startBtn.addEventListener("click", appTimer);
  resetBtn.addEventListener("click", resetTimer);
  pauseBtn.addEventListener("click", pauseTimer);