function menuButtonClick() {
  document.getElementById("menu-box").classList.toggle("active");
  document.getElementById("span1").classList.toggle("active");
  document.getElementById("span2").classList.toggle("active");
  document.getElementById("span3").classList.toggle("active");
  console.log(
    window.pageYOffset,
    document.getElementById("menu-box").classList[0] == "active",
    window.pageYOffset != 0 &&
      document.getElementById("menu-box").classList[0] == "active"
  );
}
window.onscroll = function () {
  if (
    window.pageYOffset != 0 &&
    document.getElementById("menu-box").classList[0] == "active"
  ) {
    menuButtonClick();
  }
};
