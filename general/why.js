const getQuestionmark = document.querySelector(".first");
const question = document.querySelector(".question");
const details = document.querySelector(".details");

getQuestionmark.addEventListener("mouseover", () => {
  question.classList.add("change");
});

question.addEventListener("mouseleave", () => {
  question.classList.remove("change");
});

setTimeout(() => {
  details.classList.remove("hide");
}, 5000);
