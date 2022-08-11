// Progress circle (CARDs) actions --------------


// Progress FIRST circle (CARD2)  --------------


let progressBar5 = document.querySelector(".FirstCircularProgress2");
let valueContainer5 = document.querySelector(".valueFirstCircle2");

let progressValue5 = 0;
let progressEndValue5 = 25;
let speed5 = 50;

let progress5 = setInterval(() => {
  progressValue5++;
  valueContainer5.textContent = `${progressValue5}%`;
  progressBar5.style.background = `conic-gradient(
    #00f4d1 ${progressValue5 * 3.6}deg,
    #464646 ${progressValue5 * 3.6}deg
  )`;
  if (progressValue5 == progressEndValue5) {
    clearInterval(progress5);
  }
}, speed5);


// Progress SECOND circle (CARD2)  --------------


let progressBar6 = document.querySelector(".SecondCircularProgress2");
let valueContainer6 = document.querySelector(".valueSecondCircle2");

let progressValue6 = 0;
let progressEndValue6 = 60;
let speed6 = 50;

let progress6 = setInterval(() => {
  progressValue6++;
  valueContainer6.textContent = `${progressValue6}%`;
  progressBar6.style.background = `conic-gradient(
    #00f4d1 ${progressValue6 * 3.6}deg,
    #464646 ${progressValue6 * 3.6}deg
  )`;
  if (progressValue6 == progressEndValue6) {
    clearInterval(progress6);
  }
}, speed6);

//Progress FIRST circle (CARD2)  --------------

let progressBar7 = document.querySelector(".FirstCircularProgress2b");
let valueContainer7 = document.querySelector(".valueFirstCircle2b");

let progressValue7 = 0;
let progressEndValue7 = 10;
let speed7 = 50;

let progress7 = setInterval(() => {
  progressValue7++;
  valueContainer7.textContent = `${progressValue7}%`;
  progressBar7.style.background = `conic-gradient(
    #464646 ${progressValue7 * 0.0}deg,
    #464646 ${progressValue7 * 0.0}deg
  )`;
  if (progressValue7 == progressEndValue7) {
    clearInterval(progress7);
  }
}, speed7);


// Progress SECOND circle (CARD2)  --------------

let progressBar8 = document.querySelector(".SecondCircularProgress2b");
let valueContainer8 = document.querySelector(".valueSecondCircle2b");

let progressValue8 = 0;
let progressEndValue8 = 10;
let speed8 = 50;

let progress8 = setInterval(() => {
  progressValue8++;
  valueContainer8.textContent = `${progressValue8}%`;
  progressBar8.style.background = `conic-gradient(
    #00f4d1 ${progressValue8 * 0.0}deg,
    #464646 ${progressValue8 * 0.0}deg
  )`;
  if (progressValue8 == progressEndValue8) {
    clearInterval(progress8);
  }
}, speed8);



