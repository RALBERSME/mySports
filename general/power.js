const btnFade = document.querySelector(".btn");

setTimeout(() => {
  btnFade.classList.remove("hide");
  btnFade.style.animation = "btnFadeIn 3s 0s linear forwards";
}, 6000);
