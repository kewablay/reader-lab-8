export function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    title: params.get("title"),
  };
}

export const getApiImageUrl = (key) =>
  `https://covers.openlibrary.org/b/id/${key}-L.jpg`;

export const getBookPreviewLink = (key) =>
  `https://archive.org/details/${key}/page/540/mode/2up?ref=ol&view=theater`;

export const showAnimations = () => {
  // GSAP Animations
  gsap.from(".hero-text h1", {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: "power3.out",
    delay: 0.5,
  });

  gsap.from(".line", {
    duration: 1,
    scaleY: 0,
    transformOrigin: "top",
    ease: "power3.out",
    delay: 1,
  });

  gsap.from(".hero-text p span:nth-child(1)", {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power3.out",
    delay: 1.5,
  });

  gsap.from(".hero-text p span:nth-child(2)", {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power3.out",
    delay: 2,
    onComplete: () => {
      // Make the text appear from the line
      gsap.to(".hero-text p span:nth-child(2)", {
        x: -50,
        ease: "power3.out",
        duration: 1,
      });
    },
  });

  gsap.from(".hero-text .sm\\:col-span-6:nth-child(2)", {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power3.out",
    delay: 2.5,
  });
};
