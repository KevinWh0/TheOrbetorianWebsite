window.addEventListener("scroll", () => {
  var y = window.scrollY;
  document.getElementById("HeroTitle").style.top = -y / 5 + 50 + "%";
});