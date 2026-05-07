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

const heroData = {
  leader: {
    label: "Leader / Command",
    title: "Controlled authority. Squad-core presence.",
    text: "The Leader holds the mission line, stabilizes the squad and commands the first breach."
  },
  ranger: {
    label: "Ranger / Recon",
    title: "Fast scanner. Silent movement. First eyes in fog.",
    text: "The Ranger reads terrain, marks threats and opens the path before the squad commits."
  },
  heavy: {
    label: "Heavy / Support",
    title: "Compact power. Shielding pressure. Hold the breach.",
    text: "The Heavy anchors the line with dense support mass, stronger shoulders and battlefield control."
  },
  tech: {
    label: "Tech / Specialist",
    title: "Signal tools. Diagnostics. Mission interface.",
    text: "The Tech repairs, scans, hacks and turns unstable systems into tactical advantages."
  },
  sniper: {
    label: "Sniper / Precision",
    title: "Calm optics. Surgical line. One clean shot.",
    text: "The Sniper controls distance, deletes key targets and watches the silent angles."
  },
  assault: {
    label: "Assault / Breach",
    title: "Forward pressure. Close-range violence. Break the door.",
    text: "The Assault Frog enters first when the mission becomes kinetic."
  }
};

const heroTabs = document.querySelectorAll(".hero-tab");
const heroPanel = document.getElementById("heroPanel");

heroTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    heroTabs.forEach((button) => button.classList.remove("active"));
    tab.classList.add("active");

    const selected = heroData[tab.dataset.class];

    heroPanel.innerHTML = `
      <p class="eyebrow">${selected.label}</p>
      <h3>${selected.title}</h3>
      <p>${selected.text}</p>
    `;
  });
});

const scanButton = document.getElementById("scanButton");
const scanOutput = document.getElementById("scanOutput");

const scanMessages = [
  "SIGNAL FOUND // FIRST CONTACT READY",
  "Θ9 TRACE DETECTED // MACHINE SWARM DISTANT",
  "FROG SEAL ACTIVE // HOLD THE LINE",
  "MISSION PATH OPEN // BACKER SIGNAL LOCKED",
  "CODEX NODE ONLINE // ENTER THE FROGVERSE"
];

if (scanButton && scanOutput) {
  scanButton.addEventListener("click", () => {
    const message = scanMessages[Math.floor(Math.random() * scanMessages.length)];
    scanOutput.textContent = message;
    scanOutput.classList.add("pulse");

    setTimeout(() => {
      scanOutput.classList.remove("pulse");
    }, 700);
  });
}

document.querySelectorAll(".pledge-card, .tile").forEach((item) => {
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

console.log("SPACEFROGS PWA v0.2 // Signal active");
