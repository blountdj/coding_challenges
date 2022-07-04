function toggleClass() {
  document.getElementById("subnav-content").classList.toggle("show");
  document.getElementById("dropdown-arrow").classList.toggle("up");
}
// Add event listener to dropdown
document.getElementById("subnavbtn").addEventListener("click", toggleClass);
