const navLinks = document.querySelectorAll(".bottomnav a");
const sections = document.querySelectorAll(".section");

function setActiveNav() {
  let current = "home";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 140;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id") || current;
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === `#${current}`
    );
  });
}

window.addEventListener("scroll", setActiveNav);
window.addEventListener("load", setActiveNav);

document.querySelectorAll(".cards article, .tile").forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("selected");
  });
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("service-worker.js")
      .catch((error) => {
        console.log("Service worker registration failed:", error);
      });
  });
}

console.log("SPACEFROGS PWA v0.1 // Signal active");
