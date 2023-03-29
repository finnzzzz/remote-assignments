const toggleBtn = document.querySelector(".toggle-btn");
const navbarLinks = document.querySelector(".main-nav");

toggleBtn.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
