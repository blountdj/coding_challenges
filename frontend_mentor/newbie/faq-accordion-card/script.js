const questions = document.querySelectorAll(".section");

function click() {
  console.log("click");
  this.classList.toggle("active");
}

questions.forEach(function (question) {
  question.addEventListener("click", click);
});
