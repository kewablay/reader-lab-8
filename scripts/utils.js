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
    delay: 0.1,
  });

  gsap.from(".line", {
    duration: 1,
    scaleY: 0,
    transformOrigin: "top",
    ease: "power3.out",
    delay: 0.3,
  });

  gsap.from(".hero-text p span:nth-child(1)", {
    duration: 1,
    y: 50,
    x: -80,
    opacity: 0,
    ease: "power3.out",
    delay: 0.5,
  });

  gsap.from(".hero-text p span:nth-child(2)", {
    duration: 1,
    y: 50,

    opacity: 0,
    ease: "power3.out",
    delay: 0.8,
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
    y: 30,
    opacity: 0,
    ease: "power3.out",
    delay: 1,
  });

  gsap.from(".navigation-btns", {
    duration: 1,
    // y: 30,
    opacity: 0,
    ease: "power3.out",
    delay: 1.5,
  });

  gsap.from(".books-container  ", {
    duration: 1,
    y: 30,
    opacity: 0,
    ease: "power3.out",
    delay: 1.5,
  });
};

export const loadTheme = () => {
  const toggleButton = document.getElementById("theme-toggle");

  toggleButton.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme); // Save the user's preference
  });

  // Load the user's preference from localStorage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
};
