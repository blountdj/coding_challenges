function animate() {
  // Remove starting no animation class
  const t = document.querySelectorAll(".noAnimation");
  console.log(t, typeof t);
  t.forEach((el) => {
    el.classList.remove("noAnimation");
  });

  // toggle animation class
  document.querySelector("#clickMe").classList.toggle("transform-active");
}

// Event listener
document.querySelector("#clickMe").addEventListener("click", animate);
