const hand = document.querySelector(".hand");
const run = document.getElementById("run");

setTimeout(() => {
  hand.style.animation = "showHand 5s 2s ease-in-out forwards";
}, 7000);

setTimeout(() => {
  run.style.marginLeft = "200px";
  run.style.color = "yellow";
  run.textContent = "grap my hand, I'll rescue you (click hand)";
}, 9000);
