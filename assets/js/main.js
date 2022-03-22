$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#scroll").fadeIn();
    } else {
      $("#scroll").fadeOut();
    }
  });
  $("#scroll").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      40
    );
    return false;
  });
});

// HAMBURGER TOGGLER
$(".hamburger-menu").on("click", function () {
  $(".hamburger-menu").toggleClass("animate");
  $("#overlay").toggleClass("overlay-active");
  $(".main-top-section").toggleClass("mobile-view");
  $("body").toggleClass("fix-screen-mobile");
  $(".hero-background").toggleClass("overflow-initial");
});
$(document).ready(function () {
  const Section1 = document.querySelector("#mint");
  const Section2 = document.querySelector("#about");
  const Section3 = document.querySelector("#showcase");
  const Section4 = document.querySelector("#mission");
  const Section5 = document.querySelector("#roadmap");
  const Section6 = document.querySelector("#Team");
  const Section7 = document.querySelector("#Team");
  const Section8 = document.querySelector("#Team");
  // const mainMenu = document.querySelector(" #main-menu ");

  //  SECTION-1 SCROLL
  $(".section-1").click(function () {
    // mainMenu.click();
    $(".hamburger-menu").removeClass("animate");
    $("#overlay").removeClass("overlay-active");
    $(".main-top-section").removeClass("mobile-view");
    $("body").removeClass("fix-screen-mobile");
    Section1.scrollIntoView();
  });

  // SECTION-2 SCROLL
  $(".section-2").click(function () {
    // mainMenu.click();
    $(".hamburger-menu").removeClass("animate");
    $("#overlay").removeClass("overlay-active");
    $(".main-top-section").removeClass("mobile-view");
    $("body").removeClass("fix-screen-mobile");
    Section2.scrollIntoView();
  });

  // SECTION-3 SCROLL
  $(".section-3").click(function () {
    // mainMenu.click();
    $(".hamburger-menu").removeClass("animate");
    $("#overlay").removeClass("overlay-active");
    $(".main-top-section").removeClass("mobile-view");
    $("body").removeClass("fix-screen-mobile");
    Section3.scrollIntoView();
  });

  // SECTION-4 SCROLL
  $(".section-4").click(function () {
    // mainMenu.click();
    $(".hamburger-menu").removeClass("animate");
    $("#overlay").removeClass("overlay-active");
    $(".main-top-section").removeClass("mobile-view");
    $("body").removeClass("fix-screen-mobile");
    Section4.scrollIntoView();
  });

  // SECTION-5 SCROLL
  $(".section-5").click(function () {
    // mainMenu.click();
    $(".hamburger-menu").removeClass("animate");
    $("#overlay").removeClass("overlay-active");
    $(".main-top-section").removeClass("mobile-view");
    $("body").removeClass("fix-screen-mobile");
    Section5.scrollIntoView();
  });

  // SECTION-6 SCROLL
  $(".section-6").click(function () {
    // mainMenu.click();
    $(".hamburger-menu").removeClass("animate");
    $("#overlay").removeClass("overlay-active");
    $(".main-top-section").removeClass("mobile-view");
    $("body").removeClass("fix-screen-mobile");
    Section6.scrollIntoView();
  });
  $(".section-7").click(function () {
    // mainMenu.click();
    $(".hamburger-menu").removeClass("animate");
    $("#overlay").removeClass("overlay-active");
    $(".main-top-section").removeClass("mobile-view");
    $("body").removeClass("fix-screen-mobile");
    Section7.scrollIntoView();
  });
  $(".section-8").click(function () {
    // mainMenu.click();
    $(".hamburger-menu").removeClass("animate");
    $("#overlay").removeClass("overlay-active");
    $(".main-top-section").removeClass("mobile-view");
    $("body").removeClass("fix-screen-mobile");
    Section8.scrollIntoView();
  });
});

var once = false;

function roadMapLineScroll() {
  const roadMapLine = document.querySelector(".line-img");
  let roadmapElementSelector = document
    .getElementById("roadmap")
    .getBoundingClientRect().y;

  if (roadmapElementSelector <= 0) {
    const percent = (Math.abs(roadmapElementSelector) * 50) / 100;

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
