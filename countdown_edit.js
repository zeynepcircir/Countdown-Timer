const minute = document.getElementById("minute");
const second = document.getElementById("second");
let interval
let valuesChanged=false;
// Kutucuklar
const selectedMin = document.getElementById("selectedMin");
const selectedSec = document.getElementById("selectedSec");

// Butonlar
const startButton = document.getElementById("startButton");
const buttonStop = document.getElementById("stopButton");
const resetButton = document.getElementById("resetButton");

let stop = false;

equalizeTheMinuteApp(minute, selectedMin);
equalizeTheSecondApp(second, selectedSec);

startButton.addEventListener("click", startTimerApp);

resetButton.addEventListener("click", function () {
  stop = true;
  resetTableUI(minute, second);
  resetInputUI(selectedMin, selectedSec);
  clearInterval(interval);
});

stopButton.addEventListener("click", function () {
  stop = true;
  clearInterval(interval);
});

const TIME = {
  /**
   * @private
   */
  _min: 0,
  /**
   * @private
   */
  _second: 0,
  get min() {
    return this._min;
  },
  get sec() {
    return this._second;
  },
  set min(m) {
    this._min = m;
  },
  set sec(s) {
    this._second = s;
  },
};

function getValuesAndUpdateLogic() {
  let min = minute.textContent;
  let sec = second.textContent;
  TIME.sec = Number(sec);
  TIME.min = Number(min);
}

//FUNCTIONS
/**
 * @explanation
 * asljkdfhkasjdhf
 */
function startTimerApp() {
  stop = false;
  if(valuesChanged){
    getValuesAndUpdateLogic();
  }
  // let min = minute.textContent;
  // let sec = second.textContent;
  let initial = true;
  interval = setInterval(() => {
    let sec = TIME.sec;
    let min = TIME.min;
    // sec = sec < 10 ? "0" + sec : sec;
    //girdiğimiz değerlere göre sürenin akış algorisması
    if (initial && sec == 0 && min == 0) {
      //sec-- olmamalı, kullaniciya uyari, zamani
      alert("Number not entered!..");
    } else if (sec == 0 && min > 0) {
      //dakika yi azalt ,saniye 59 a
      min--;
      sec = 59;
    } else if (min == 0 && sec == 0) {
      window.alert("Time is up !..");
      resetInputUI(selectedMin, selectedSec);
      clearInterval(interval);
    } else {
      sec = sec - 1;
    }
    if (stop) {
      clearInterval(interval);
      return;
    }
    //stop = true;
    initial = false;
    valuesChanged=false;
    updateLogic(min, sec)
    updateUI()
  }, 1000); //saniyede bir değişim oluyor.
}

function resetLogic() {
  TIME.min = 0;
  TIME.sec = 0;
}

function updateUI() {
  minute.textContent = TIME.min;
  second.textContent = TIME.sec < 10 ? "0" + TIME.sec : TIME.sec;
}
function updateLogic(min, sec) {
  TIME.min = min;
  TIME.sec = sec;
}

function resetTableUI(minute, second) {
  minute.textContent = "00";
  second.textContent = "00";
}

function resetInputUI(selectedMin, selectedSec) {
  selectedMin.value = "00";
  selectedSec.value = "00";
}

function equalizeTheMinuteApp(minute, selectedMin) {
  selectedMin.addEventListener("change", () => {
    //girdimiz değerleri başlangıçtaki değer ile değiştiriyor.
    minute.textContent = selectedMin.value;
    valuesChanged=true;
  });
}

function equalizeTheSecondApp(second, selectedSec) {
  selectedSec.addEventListener("change", () => {
    //saniye 10dan küçük olduğunda başına sıfır ekleriz.
    valuesChanged=true;
    second.textContent =
      selectedSec.value < 10 ? "0" + selectedSec.value : selectedSec.value;
  });
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
