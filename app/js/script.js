const shareBtn = document.querySelector(".share__photo");
const shareBar = document.querySelector(".share__container");
const shareTriangle = document.querySelector(".share__triangle");

shareBtn.addEventListener("click", () => {
  if (shareBar.classList.contains("active")) {
    shareBar.style.display = "none";
    shareBtn.style.color = "var(--no-active-btn-color)";
    shareBtn.style.backgroundColor = "var(--no-active-btn-background)";
    shareBar.classList.remove("active");
    shareTriangle.style.display = "none";
  } else {
    shareBar.style.display = "flex";
    shareBtn.style.color = "var(--active-btn-color)";
    shareBtn.style.backgroundColor = "var(--active-btn-background)";
    shareBar.classList.add("active");
    shareTriangle.style.display = "block";
  }
});
