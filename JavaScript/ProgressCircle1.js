
// Progress circle (CARDs) actions --------------


// Progress FIRST circle (CARD1)  --------------

let progressBar = document.querySelector(".FirstCircularProgress1");
let valueContainer = document.querySelector(".valueFirstCircle1");

let progressValue = 0;
let progressEndValue = 75;
let speed = 50;

let progress = setInterval(() => {
  progressValue++;
  valueContainer.textContent = `${progressValue}%`;
  progressBar.style.background = `conic-gradient(
    #00f4d1 ${progressValue * 3.6}deg,
    #464646 ${progressValue * 3.6}deg
  )`;
  if (progressValue == progressEndValue) {
    clearInterval(progress);
  }
}, speed);


// Progress SECOND circle (CARD1)  --------------


let progressBar2 = document.querySelector(".SecondCircularProgress1");
let valueContainer2 = document.querySelector(".valueSecondCircle1");

let progressValue2 = 0;
let progressEndValue2 = 35;
let speed2 = 50;

let progress2 = setInterval(() => {
  progressValue2++;
  valueContainer2.textContent = `${progressValue2}%`;
  progressBar2.style.background = `conic-gradient(
    #00f4d1 ${progressValue2 * 3.6}deg,
    #464646 ${progressValue2 * 3.6}deg
  )`;
  if (progressValue2 == progressEndValue2) {
    clearInterval(progress2);
  }
}, speed2);

//Progress FIRST circle (CARD1b)  --------------

let progressBar3 = document.querySelector(".FirstCircularProgress1b");
let valueContainer3 = document.querySelector(".valueFirstCircle1b");

let progressValue3 = 0;
let progressEndValue3 = 10;
let speed3 = 50;

let progress3 = setInterval(() => {
  progressValue3++;
  valueContainer3.textContent = `${progressValue3}%`;
  progressBar3.style.background = `conic-gradient(
    #464646 ${progressValue3 * 0.0}deg,
    #464646 ${progressValue3 * 0.0}deg
  )`;
  if (progressValue3 == progressEndValue3) {
    clearInterval(progress3);
  }
}, speed3);


// Progress SECOND circle (CARD1b)  --------------

let progressBar4 = document.querySelector(".SecondCircularProgress1b");
let valueContainer4 = document.querySelector(".valueSecondCircle1b");

let progressValue4 = 0;
let progressEndValue4 = 10;
let speed4 = 50;

let progress4 = setInterval(() => {
  progressValue4++;
  valueContainer4.textContent = `${progressValue4}%`;
  progressBar4.style.background = `conic-gradient(
    #00f4d1 ${progressValue4 * 0.0}deg,
    #464646 ${progressValue4 * 0.0}deg
  )`;
  if (progressValue4 == progressEndValue4) {
    clearInterval(progress4);
  }
}, speed4);



