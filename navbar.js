// Load navbar HTML
fetch('navbar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('nav-container').innerHTML = data;
    initializeNavbar();
  })
  .catch(error => console.error('Error loading navbar:', error));

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
  window.addEventListener('scroll', function () {
    const nav = document.querySelector('.top-nav');
    if (nav && window.scrollY > 100) {
      nav.classList.add('scrolled');
    } else if (nav) {
      nav.classList.remove('scrolled');
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
