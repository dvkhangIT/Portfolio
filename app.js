const icon = document.getElementById("icon");
const body = document.body;
icon.addEventListener("click", () => {
  body.classList.toggle("dark-theme");
  if (body.classList.contains("dark-theme")) {
    icon.src = "image/sun.png";
  } else {
    icon.src = "image/moon.png";
  }
});
