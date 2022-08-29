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

startButton.addEventListener("click", startTimer);

resetButton.addEventListener("click", () => {
  stop = true;
  minute.textContent = "00";
  second.textContent = "00";
  selectedMin.value = "00";
  selectedSec.value = "00";
  stop = false;
});



function startTimer() {       
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
      clearInterval(interval);
      window.alert("Time is up!..");
      selectedMin.value = "00";
      secilenSec.value = "00";
    }
    if (stop) {
      clearInterval(interval);
      return;
    }

    minute.textContent = min;
    second.textContent = sec;
  }, 1000);   //saniyede bir değişim oluyor.
}