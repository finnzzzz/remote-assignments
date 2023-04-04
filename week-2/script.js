const toggleBtn = document.querySelector(".toggle-btn");
const navbarLinks = document.querySelector(".main-nav");
const banner = document.querySelector(".banner");
const bannerTitle = document.querySelector(".banner-title");
const CallBtn = document.querySelector(".btn");
const containerHide = document.querySelector(".container-hide");
const cancelBtn = document.querySelector(".cancel-btn");

toggleBtn.addEventListener("click", () => {
  navbarLinks.classList.add("active");
  cancelBtn.classList.add("active");
});

banner.addEventListener("click", () => {
  bannerTitle.textContent = "Have a Good Time!";
});

CallBtn.addEventListener("click", () => {
  containerHide.classList.remove("container-hide");
});

cancelBtn.addEventListener("click", () => {
  navbarLinks.classList.remove("active");
  cancelBtn.classList.remove("active");
});
