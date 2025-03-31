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
