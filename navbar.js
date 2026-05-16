// Load navbar HTML when DOM is ready
function loadNavbar() {
  const container = document.getElementById("nav-container");
  if (!container) return;

  fetch("navbar.html?v=20260501")
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.text();
    })
    .then((data) => {
      container.innerHTML = data;
      initializeNavbar();
    })
    .catch(() => {
      // Fallback when fetch fails (e.g. opening file:// directly): inject navbar inline
      container.innerHTML = `<nav class="top-nav">
    <div class="nav-logo">
        <a href="index.html"><img src="content/Herd H purple.svg" alt="HERD" class="logo-img"></a>
    </div>
    <button type="button" class="nav-hamburger" aria-label="Open menu"><span class="nav-menu-label">Menu</span></button>
    <div class="nav-overlay" aria-hidden="true"></div>
    <div class="nav-links">
        <a href="about.html">About</a>
        <a href="podcast-launch.html">Podcast launch</a>
        <a href="https://herdstorytelling.substack.com/podcast" target="_blank" rel="noopener">Podcast</a>
        <a href="contact.html">Contact</a>
        <a href="https://substack.com/@herdstorytelling" target="_blank" rel="noopener">Newsletter</a>
        <a href="events.html" class="nav-ticket-icon">
            <span class="nav-ticket-label">Tickets</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" /><path d="M13 5v2" /><path d="M13 17v2" /><path d="M13 11v2" /></svg>
        </a>
    </div>
</nav>`;
      initializeNavbar();
    });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", loadNavbar);
} else {
  loadNavbar();
}

function initializeNavbar() {
  // Set active nav link based on current page
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".top-nav a");
  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  // Navigation scroll effect
  window.addEventListener("scroll", function () {
    const nav = document.querySelector(".top-nav");
    if (nav && window.scrollY > 100) {
      nav.classList.add("scrolled");
    } else if (nav) {
      nav.classList.remove("scrolled");
    }
  });

  // Hamburger menu (mobile popup nav)
  const hamburger = document.querySelector(".nav-hamburger");
  const navPanel = document.querySelector(".nav-links");
  const navOverlay = document.querySelector(".nav-overlay");

  if (hamburger && navPanel) {
    function openNav() {
      hamburger.classList.add("active");
      hamburger.setAttribute("aria-label", "Close menu");
      const label = hamburger.querySelector(".nav-menu-label");
      if (label) label.textContent = "Close";
      navPanel.classList.add("active");
      if (navOverlay) navOverlay.classList.add("active");
      document.body.style.overflow = "hidden";
    }
    function closeNav() {
      hamburger.classList.remove("active");
      hamburger.setAttribute("aria-label", "Open menu");
      const label = hamburger.querySelector(".nav-menu-label");
      if (label) label.textContent = "Menu";
      navPanel.classList.remove("active");
      if (navOverlay) navOverlay.classList.remove("active");
      document.body.style.overflow = "";
    }

    hamburger.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      if (navPanel.classList.contains("active")) closeNav();
      else openNav();
    });

    navPanel.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        closeNav();
      });
    });

    if (navOverlay) {
      navOverlay.addEventListener("click", closeNav);
    }

    document.addEventListener("click", function (e) {
      if (
        navPanel.classList.contains("active") &&
        !hamburger.contains(e.target) &&
        !navPanel.contains(e.target) &&
        !(navOverlay && navOverlay.contains(e.target))
      ) {
        closeNav();
      }
    });
  }
}

// Add scroll behavior for mobile footer
let lastScroll = 0;
const socialContainer = document.getElementById("social-container");

// Add console log to check if element is found
console.log("Social container:", socialContainer);

window.addEventListener("scroll", () => {
  if (window.innerWidth <= 768) {
    const currentScroll = window.pageYOffset;

    // Add console logs to debug scroll behavior
    console.log("Current scroll:", currentScroll);
    console.log("Last scroll:", lastScroll);

    if (currentScroll > lastScroll) {
      console.log("Scrolling down - hiding footer");
      socialContainer?.classList.add("hidden");
    } else {
      console.log("Scrolling up - showing footer");
      socialContainer?.classList.remove("hidden");
    }

    lastScroll = currentScroll;
  }
});
