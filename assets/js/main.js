var once = false;

function roadMapLineScroll() {
  const roadMapLine = document.querySelector(".line-img");
  let roadmapElementSelector = document
    .getElementById("roadmap")
    .getBoundingClientRect().y;

  if (roadmapElementSelector <= 0) {
    const percent = (Math.abs(roadmapElementSelector) * 100) / 900;

    if (102 - percent < 0) {
      once = true;
    }
    if (102 - percent > 0) {
      //         roadMapLine.style.background = `linear-gradient(to top, #6BE7ED ${
      //    100 - percent
      //   }%,  #E332EF ${102 - percent}%, #E332EF 100%)`;
      if (once) {
        roadMapLine.style.background = `linear-gradient(to top, rgb(107, 231, 237) 2.23194%, rgb(227, 50, 239) 4.23194%, rgb(227, 50, 239) 100%)`;
      } else {
        roadMapLine.style.background = `linear-gradient(to top, #6BE7ED ${
          100 - percent
        }%,  #E332EF ${102 - percent}%, #E332EF 100%)`;
      }
    }
  }
}
window.onscroll = function () {
  heroSpecsOnMeta();
  roadMapLineScroll();
  runSlider();
};
function handleDarkMode() {
  console.log("run");
  if ($("body").hasClass("active-body")) {
    $("body").removeClass("active-body");
  } else {
    $("body").removeClass("active-body");
    $("body").addClass("active-body");
  }
}
