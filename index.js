function init() {
  gsap.registerPlugin(ScrollTrigger);
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
init();
let cursor = document.querySelector(".cursor");
let main = document.querySelector(".main");
main.addEventListener("mousemove", (e) => {
  cursor.style.left = e.x + "px";
  cursor.style.top = e.y + "px";
});

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    markers: false,
    start: "top 27%",
    end: "top 0",
    scrub: 3,
  },
});
tl.to(
  ".page1 h1",
  {
    x: -100,
  },
  "anim"
);
tl.to(
  ".page1 h2",
  {
    x: 100,
  },
  "anim"
);
tl.to(
  ".page1 video",
  {
    width: "90%",
  },
  "anim"
);
let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: ".main",
    start: "top -127%",
    end: "top -130%",
    scrub: 3,
  },
});
tl2.to(".main", {
  backgroundColor: "#fff",
});

let boxes = document.querySelectorAll(".box");
boxes.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    let att = elem.getAttribute("data-image");
    console.log("att: ", att);
    cursor.style.width = "470px";
    cursor.style.height = "370px";
    cursor.style.borderRadius = "0";
    cursor.style.backgroundImage = `url(${att})`;
  });
  elem.addEventListener("mouseleave", function () {
    elem.style.backgroundColor = "transparent";
    cursor.style.width = "20px";
    cursor.style.height = "20px";
    cursor.style.borderRadius = "50%";
    cursor.style.backgroundImage = `none`;
  });
});

let h4 = document.querySelectorAll("#nav h4");
let purple = document.querySelector("#purple");
h4.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    purple.style.display = "block";
    purple.style.opacity = "1";
  });
  elem.addEventListener("mouseleave", function () {
    purple.style.display = "none";
    purple.style.opacity = "0";
  });
});
