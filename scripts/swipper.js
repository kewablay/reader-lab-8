function myPlugin({ swiper, extendParams, on }) {
  extendParams({
    debugger: false,
  });

  on("init", () => {
    if (!swiper.params.debugger) return;
    // console.log("init");
  });
  on("click", (swiper, e) => {
    if (!swiper.params.debugger) return;

    let title = e.target.alt;
    console.log("title:", title);
    // move to the book detail page
    window.location.href = `/pages/bookDetail.html?title=${title}`;
  });

  on("tap", (swiper, e) => {
    if (!swiper.params.debugger) return;
    // console.log("tap");
  });
  on("doubleTap", (swiper, e) => {
    displayLoadMore()
    if (!swiper.params.debugger) return;
    // console.log("doubleTap");
  });
  on("sliderMove", (swiper, e) => {
    if (!swiper.params.debugger) return;
    // console.log("sliderMove");
  });
  on("slideChange", () => {
    if (!swiper.params.debugger) return;
    // console.log("slideChange", swiper.previousIndex, "->", swiper.activeIndex);
  });
  on("slideChangeTransitionStart", () => {
    if (!swiper.params.debugger) return;
    // console.log("slideChangeTransitionStart");
  });
  on("slideChangeTransitionEnd", () => {
    if (!swiper.params.debugger) return;
    // console.log("slideChangeTransitionEnd");
  });
  on("transitionStart", () => {
    if (!swiper.params.debugger) return;
    // console.log("transitionStart");
  });
  on("transitionEnd", () => {
    if (!swiper.params.debugger) return;
    // console.log("transitionEnd");
  });
  on("fromEdge", () => {
    if (!swiper.params.debugger) return;
    // console.log("fromEdge");
  });
  on("reachBeginning", () => {
    if (!swiper.params.debugger) return;
    // console.log("reachBeginning");
  });
  on("reachEnd", () => {
   
    if (!swiper.params.debugger) return;
    // console.log("reachEnd");
  });
}

// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
  // Install Plugin To Swiper
  modules: [myPlugin],
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 45,
    stretch: 0,
    depth: 120,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: "#custom-next",
    prevEl: "#custom-prev",
  },
  // Enable debugger
  debugger: true,
});
