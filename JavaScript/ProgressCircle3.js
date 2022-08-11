// Progress circle (CARDs) actions --------------


// Progress FIRST circle (CARD3)  --------------


let progressBar9 = document.querySelector(".FirstCircularProgress3");
let valueContainer9 = document.querySelector(".valueFirstCircle3");

let progressValue9 = 0;
let progressEndValue9 = 25;
let speed9 = 50;

let progress9 = setInterval(() => {
  progressValue9++;
  valueContainer9.textContent = `${progressValue9}%`;
  progressBar9.style.background = `conic-gradient(
    #00f4d1 ${progressValue9 * 3.6}deg,
    #464646 ${progressValue9 * 3.6}deg
  )`;
  if (progressValue9 == progressEndValue9) {
    clearInterval(progress9);
  }
}, speed9);


// Progress SECOND circle (CARD3)  --------------


let progressBar10 = document.querySelector(".SecondCircularProgress3");
let valueContainer10 = document.querySelector(".valueSecondCircle3");

let progressValue10 = 0;
let progressEndValue10 = 60;
let speed10 = 50;

let progress10 = setInterval(() => {
  progressValue10++;
  valueContainer10.textContent = `${progressValue10}%`;
  progressBar10.style.background = `conic-gradient(
    #00f4d1 ${progressValue10 * 3.6}deg,
    #464646 ${progressValue10 * 3.6}deg
  )`;
  if (progressValue10 == progressEndValue10) {
    clearInterval(progress10);
  }
}, speed10);

//Progress FIRST circle (CARD3b)  --------------

let progressBar11 = document.querySelector(".FirstCircularProgress3b");
let valueContainer11 = document.querySelector(".valueFirstCircle3b");

let progressValue11 = 0;
let progressEndValue11 = 10;
let speed11 = 50;

let progress11 = setInterval(() => {
  progressValue11++;
  valueContainer11.textContent = `${progressValue11}%`;
  progressBar11.style.background = `conic-gradient(
    #464646 ${progressValue11 * 0.0}deg,
    #464646 ${progressValue11 * 0.0}deg
  )`;
  if (progressValue11 == progressEndValue11) {
    clearInterval(progress11);
  }
}, speed11);


// Progress SECOND circle (CARD3b)  --------------

let progressBar12 = document.querySelector(".SecondCircularProgress3b");
let valueContainer12 = document.querySelector(".valueSecondCircle3b");

let progressValue12 = 0;
let progressEndValue12 = 10;
let speed12 = 50;

let progress12 = setInterval(() => {
  progressValue12++;
  valueContainer12.textContent = `${progressValue12}%`;
  progressBar12.style.background = `conic-gradient(
    #00f4d1 ${progressValue12 * 0.0}deg,
    #464646 ${progressValue12 * 0.0}deg
  )`;
  if (progressValue12 == progressEndValue12) {
    clearInterval(progress12);
  }
}, speed12);



