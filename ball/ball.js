const foot1 = document.getElementById("foot1");
const foot2 = document.getElementById("foot2");
const explanation = document.getElementById("explanation");
const titleStep = document.getElementById("titleStep");

function step1() {
  titleStep.textContent = "Step 1:";
  foot1.style.top = "50%";
  foot1.style.left = "18%";
  foot2.style.top = "50%";
  foot2.style.left = "30%";
  explanation.textContent = "Break";
}

function step2() {
  titleStep.textContent = "Step 2:";
  foot1.style.top = "30%";
  foot1.style.left = "18%";
  foot2.style.top = "50%";
  foot2.style.left = "30%";
  explanation.textContent = "Left foot forward";
}

function step3() {
  titleStep.textContent = "Step 3:";
  foot1.style.top = "30%";
  foot1.style.left = "18%";
  foot2.style.top = "50%";
  foot2.style.left = "30%";
  explanation.textContent = "Shift weight to back foot";
}

function step4() {
  titleStep.textContent = "Step 4:";
  foot1.style.top = "50%";
  foot1.style.left = "18%";
  foot2.style.top = "50%";
  foot2.style.left = "30%";
  explanation.textContent = "Left foot back";
}

function step5() {
  titleStep.textContent = "Step 5:";
  foot1.style.top = "50%";
  foot1.style.left = "18%";
  foot2.style.top = "50%";
  foot2.style.left = "30%";
  explanation.textContent = "Break";
}

function step6() {
  titleStep.textContent = "Step 6:";
  foot1.style.top = "50%";
  foot1.style.left = "18%";
  foot2.style.top = "70%";
  foot2.style.left = "30%";
  explanation.textContent = "Right foot back";
}

function step7() {
  titleStep.textContent = "Step 7:";
  foot1.style.top = "50%";
  foot1.style.left = "18%";
  foot2.style.top = "70%";
  foot2.style.left = "30%";
  explanation.textContent = "Shift weight to front foot";
}

function step8() {
  titleStep.textContent = "Step 8:";
  foot1.style.top = "50%";
  foot1.style.left = "18%";
  foot2.style.top = "50%";
  foot2.style.left = "30%";
  explanation.textContent = "Right foot forward";
}

const salsa = document.querySelector(".salsa");

function playSong() {
  const music = new Audio("salsa-cat-diegox27s-theme-208566.mp3");
  music.play();
}

salsa.addEventListener("click", () => {
  playSong();
});
