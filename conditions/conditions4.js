/* canvas */
var canvas = document.getElementById("myCanvas");
if (canvas.getContext) {
  var context = canvas.getContext("2d");

  context.beginPath();
  context.moveTo(180, 10);
  context.lineTo(180, 200);
  context.lineWidth = 5;
  context.strokeStyle = "#3B4839";
  context.stroke();

  context.beginPath();
  context.moveTo(180, 350);
  context.lineTo(180, 500);
  context.lineWidth = 5;
  context.strokeStyle = "#3B4839";
  context.stroke();

  context.beginPath();
  context.moveTo(180, 650);
  context.lineTo(400, 650);
  context.lineWidth = 5;
  context.strokeStyle = "#3B4839";
  context.stroke();

  context.beginPath();
  context.moveTo(180, 600);
  context.lineTo(180, 800);
  context.lineWidth = 5;
  context.strokeStyle = "#3B4839";
  context.stroke();

  context.beginPath();
  context.moveTo(180, 400);
  context.lineTo(400, 400);
  context.lineWidth = 5;
  context.strokeStyle = "#3B4839";
  context.stroke();

  context.beginPath();
  context.moveTo(400, 0);
  context.lineTo(400, 280);
  context.lineWidth = 5;
  context.strokeStyle = "#3B4839";
  context.stroke();

  context.beginPath();
  context.moveTo(400, 380);
  context.lineTo(400, 650);
  context.lineWidth = 5;
  context.strokeStyle = "#3B4839";
  context.stroke();

  context.beginPath();
  context.moveTo(600, 300);
  context.lineTo(600, 480);
  context.lineWidth = 5;
  context.strokeStyle = "#3B4839";
  context.stroke();

  context.beginPath();
  context.moveTo(600, 600);
  context.lineTo(600, 800);
  context.lineWidth = 5;
  context.strokeStyle = "#3B4839";
  context.stroke();

  context.beginPath();
  context.moveTo(900, 150);
  context.lineTo(900, 280);
  context.lineWidth = 5;
  context.strokeStyle = "#3B4839";
  context.stroke();

  context.beginPath();
  context.moveTo(900, 380);
  context.lineTo(900, 650);
  context.lineWidth = 5;
  context.strokeStyle = "#3B4839";
  context.stroke();

  context.beginPath();
  context.moveTo(600, 480);
  context.lineTo(900, 480);
  context.lineWidth = 5;
  context.strokeStyle = "#3B4839";
  context.stroke();

  context.beginPath();
  context.moveTo(900, 480);
  context.lineTo(1330, 480);
  context.lineWidth = 5;
  context.strokeStyle = "#3B4839";
  context.stroke();

  context.beginPath();
  context.moveTo(1100, 300);
  context.lineTo(1100, 480);
  context.lineWidth = 5;
  context.strokeStyle = "#3B4839";
  context.stroke();

  context.beginPath();
  context.moveTo(1100, 600);
  context.lineTo(1100, 800);
  context.lineWidth = 5;
  context.strokeStyle = "#3B4839";
  context.stroke();

  context.beginPath();
  context.moveTo(1333, 0);
  context.lineTo(1333, 650);
  context.lineWidth = 5;
  context.strokeStyle = "#3B4839";
  context.stroke();
}

/* btn */
const crocodile = document.getElementById("crocodile");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn2Input = document.getElementById("btn2Input");
const btn3Input = document.getElementById("btn3Input");
const btn4Input = document.getElementById("btn4Input");
const btn5Input = document.getElementById("btn5Input");
const btn6Input = document.getElementById("btn6Input");
const btn7Input = document.getElementById("btn7Input");
const hiding = document.querySelector(".hiding");
const nextBtn = document.querySelector("#nextBtn");
btn1.addEventListener("click", () => {
  const diver = document.getElementById("diver");
  diver.src = "../Images/diverFace.png";
  diver.style.width = "150px";
  diver.style.height = "200px";
  diver.style.left = "2%";
  btn1.classList.add("hide");
  btn2.classList.remove("hide");
  btn2Input.classList.remove("hide");
});

btn2Input.addEventListener("change", () => {
  if (btn2Input.value === "Nile") {
    diver.style.top = "40%";
    setTimeout(() => {
      btn2.textContent = "Which door do you choose?";
      btn2Input.classList.add("hide");
      btn3Input.classList.remove("hide");
    }, 500);
  }
});

btn3Input.addEventListener("change", () => {
  if (btn3Input.value === "upper") {
    hiding.style.left = "17.5%";
    hiding.style.width = "1000px";
    diver.style.top = "20%";
    diver.style.left = "10%";
    btn2.textContent = "How long is the Nile (kilometres)?";
    btn3Input.classList.add("hide");
    btn4Input.classList.remove("hide");
  }
  if (btn3Input.value === "lower") {
    hiding.style.left = "23%";
    hiding.style.width = "1000px";
    diver.style.top = "55%";
    diver.style.left = "10%";
    btn2.style.backgroundColor = "red";
    btn2.style.color = "white";
    btn2.textContent = "game over..You're stuck and suffocating.";
    setTimeout(() => {
      window.location.href = "../index.html";
    }, 4000);
  }
});

btn4Input.addEventListener("change", () => {
  if (btn4Input.value === "6650") {
    hiding.style.left = "28%";
    hiding.style.width = "900px";
    btn2.textContent = "Which door do you choose?";
    btn4Input.classList.add("hide");
    btn5Input.classList.remove("hide");
  }
});
btn5Input.addEventListener("change", () => {
  if (btn5Input.value === "top") {
    crocodile.classList.remove("hide");
    hiding.style.left = "25%";
    hiding.style.top = "10%";
    hiding.style.width = "900px";
    diver.style.top = "-30%";
    diver.style.left = "40%";
    btn2.style.backgroundColor = "red";
    btn2.style.color = "white";
    btn2.textContent = "game over..the crocodile is goint to eat you.";
    setTimeout(() => {
      window.location.href = "../index.html";
    }, 4000);
  }
  if (btn5Input.value === "lower") {
    hiding.style.left = "35%";
    hiding.style.width = "750px";
    btn2.textContent = `The temple is dedicated to the god Sobek. 
      What kind of god is Sobek?`;
    diver.style.left = "22%";
    btn5Input.classList.add("hide");
    btn6Input.classList.remove("hide");
  }
});

btn6Input.addEventListener("change", () => {
  if (btn6Input.value === "crocodile") {
    btn2.textContent = "Which door do you choose?";
    btn6Input.classList.add("hide");
    btn7Input.classList.remove("hide");
  }
});

btn7Input.addEventListener("change", () => {
  if (btn7Input.value === "right") {
    crocodile.classList.remove("hide");
    hiding.style.backgroundColor = "transparent";
    diver.style.top = "-25%";
    diver.style.left = "90%";
    btn2.textContent = "You made it!";
    btn2.style.backgroundColor = "yellow";
    btn2.style.color = "black";
    nextBtn.style.opacity = "1";
  } else {
    crocodile.classList.remove("hide");
    hiding.style.left = "25%";
    hiding.style.top = "10%";
    hiding.style.width = "900px";
    diver.style.top = "-30%";
    diver.style.left = "40%";
    btn2.style.backgroundColor = "red";
    btn2.style.color = "white";
    btn2.textContent = "game over..the crocodile is goint to eat you.";
    setTimeout(() => {
      window.location.href = "../index.html";
    }, 4000);
  }
});
