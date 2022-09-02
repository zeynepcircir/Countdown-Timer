const minute = document.getElementById("minute");
const second = document.getElementById("second");

// Kutucuklar
const selectedMin = document.getElementById("selectedMin");
const selectedSec = document.getElementById("selectedSec");

// Butonlar
const startButton = document.getElementById("startButton");
const buttonStop = document.getElementById("stopButton");
const resetButton = document.getElementById("resetButton");

let stop = false;

selectedMin.addEventListener("change", () => {   //girdimiz değerleri başlangıçtaki değer ile değiştiriyor.
  minute.textContent = selectedMin.value;
});

selectedSec.addEventListener("change", () => {      //saniye 10dan küçük olduğunda başına sıfır ekleriz.
  second.textContent =
  selectedSec.value < 10 ? "0" + selectedSec.value : selectedSec.value;
});

// //UI LOGIC

// //resetUI,updateUI,stopUI,startUI

// function startUI(min,sec) {
//   //1-kutu ici deger degis
//   //kutu ici renk degis

// }

// function updateMinAndSec(min,sec){
//   const min=document.querySelector('min')
//   const sec=document.querySelector('sec')
//   min.textContent
//   sec.textContent
// }

// //APPLICATION LOGIC

// function startApp(params) {
//   //kutudan degerleri al, number a donustur
//   //interval fonksiyonu cagir, application logic guncellesin
//   //interval icerisinde ayri bir fonksiyon

// }

startButton.addEventListener("click", startTimer);

resetButton.addEventListener("click", () => {
   stop = true;
  minute.textContent = "00";
  second.textContent = "00";
  selectedMin.value = "00";
  selectedSec.value = "00";
  clearInterval(interval);
  });



stopButton.addEventListener("click", () => {
  stop = true;
  clearInterval(interval);
});



function startTimer() {   
  stop = false;    
  let min = minute.textContent;
  let sec = second.textContent;
  
  const interval = setInterval(() => {    //girdiğimiz değerlere göre sürenin akış algorisması
    sec--;
    sec = sec < 10 ? "0" + sec : sec;
    if (sec == "0-1") {
      min--;
      sec = 59;
    }
    if ((min == 00 && sec == 00) || (min == 0 && sec == 0)) {
      window.alert("Time is up!..");
      selectedMin.value = "00";
      selectedSec.value = "00";
      clearInterval(interval);
    }
    if (stop) {
      clearInterval(interval);
      return;
    }
    
    minute.textContent = min;
    second.textContent = sec;
    
  }, 1000);   //saniyede bir değişim oluyor.
  
}


function start() {
  document.getElementById("board").style.backgroundColor = "rgb(191, 162, 219)";
}

function stops() {
  document.getElementById("board").style.backgroundColor = "rgb(255, 113, 113)";
}

function reset() {
  document.getElementById("board").style.backgroundColor = "rgb(159, 216, 223)";
}


// const INFO = (function () {           
//   let minute = 0;
//   let second = 0;

//   function setMinute(val) {
//     minute = minute + val;
//   }
//   function setSecond() {
//     second = second + val;
//   }
//   return {
//     setMinute,
//     setSecond,
//   };
// })();
