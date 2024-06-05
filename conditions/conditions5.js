const umschlag = document.querySelector(".umschlag");
const headline = document.getElementById("headline");
const letterText = document.querySelector(".letterText");
const letter = document.querySelector(".letter");
const btns = document.querySelectorAll(".btn");
setTimeout(() => {
  headline.textContent = "Open it, click on it!";
}, 6000);

umschlag.addEventListener("click", () => {
  letterText.classList.remove("hide");
  letter.classList.remove("hide");
  umschlag.classList.add("hide");
  headline.textContent = "Come on, think about it, you can do it!";
});

setTimeout(() => {
  btns.forEach(
    (btn) => (btn.style.animation = "btnShow .5s 0s linear forwards")
  );
}, 15000);
