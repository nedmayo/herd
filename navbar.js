function initializeNavbar() {
  // Set active nav link based on current page
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll("#navigation a");
  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  // Hamburger menu functionality
  const hamburger = document.querySelector(".hamburger");
  const navContainer = document.querySelector("#nav-container");

  if (hamburger && navContainer) {
    hamburger.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      hamburger.classList.toggle("active");
      navContainer.classList.toggle("active");
    });

    document.addEventListener("click", function (e) {
      if (!hamburger.contains(e.target) && !navContainer.contains(e.target)) {
        hamburger.classList.remove("active");
        navContainer.classList.remove("active");
      }
    });

    navContainer.addEventListener("click", function (e) {
      e.stopPropagation();
    });
  }
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", initializeNavbar);

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
