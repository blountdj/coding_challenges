///////////// Elements
const circles = document.querySelectorAll(".circle");
const submit = document.querySelector(".submit");
const hiddenItem = document.querySelector(".second");
const ratingGiven = document.querySelector(".rating_given");
const closeBtn = document.querySelector(".close");
let selected;

///////////// Functions
function removeSelected() {
  circles.forEach(function (circle) {
    circle.classList.remove("selected");
  });
}

function circleClick() {
  removeSelected();
  this.classList.add("selected");
  selected = this.getAttribute("data-id");
}

///////////// Event listeners
circles.forEach(function (circle) {
  circle.addEventListener("click", circleClick);
});

submit.addEventListener("click", function () {
  if (selected) {
    ratingGiven.textContent = selected;
    selected = null;
    hiddenItem.classList.remove("hidden");
  } else {
    alert("Please select a rating before submitting 😊");
  }
});

closeBtn.addEventListener("click", function () {
  hiddenItem.classList.add("hidden");
  removeSelected();
});
